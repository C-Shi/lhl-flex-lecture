const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST
})

/**
 * Get a single user from the database given their email.
 * @param {String} email The email of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithEmail = function (email) {
  return pool.query('SELECT * FROM users WHERE LOWER(email) = $1', [email.toLowerCase()])
    .then(result => {
      if (result.rows.length) {
        return result.rows[0];
      }
      return null
    })
    .catch(err => {
      console.log(err.message)
    })
}
exports.getUserWithEmail = getUserWithEmail;

/**
 * Get a single user from the database given their id.
 * @param {string} id The id of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithId = function (id) {
  return pool.query('SELECT * FROM users WHERE id = $1', [id])
    .then(result => {
      return result.rows[0] || null
    })
    .catch(err => {
      console.log(err.message)
    })
}
exports.getUserWithId = getUserWithId;


/**
 * Add a new user to the database.
 * @param {{name: string, password: string, email: string}} user
 * @return {Promise<{}>} A promise to the user.
 */
const addUser = function (user) {
  const { name, email, password } = user;
  return pool.query(`
    INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *;
  `, [name, email, password])
    .then(result => {
      return result.rows[0]
    })
    .catch(err => {
      console.log(err.message)
    })
}
exports.addUser = addUser;

/// Reservations

/**
 * Get all reservations for a single user.
 * @param {string} guest_id The id of the user.
 * @return {Promise<[{}]>} A promise to the reservations.
 */
const getAllReservations = function (guest_id, limit = 10) {
  return pool.query(`
    SELECT * FROM reservations JOIN properties ON reservations.property_id = properties.id
    WHERE reservations.guest_id = $1 LIMIT $2;
  `, [guest_id, limit])
    .then(result => {
      console.log(result.rows)
      return result.rows
    })
    .catch(err => {
      console.log(err.message)
    })
}
exports.getAllReservations = getAllReservations;

/// Properties

/**
 * Get all properties.
 * @param {{}} options An object containing query options.
 * @param {*} limit The number of results to return.
 * @return {Promise<[{}]>}  A promise to the properties.
 */
const getAllProperties = function (options, limit = 10) {
  let queryString = `
    SELECT properties.*, avg(property_reviews.rating) as average_rating
    FROM properties
    JOIN property_reviews ON properties.id = property_id`;
  let whereClause = [];
  let queryParams = [];

  if (options.city) {
    queryParams.push(`%${options.city.toLowerCase()}%`);
    whereClause.push(`LOWER(city) LIKE $${queryParams.length}`);
  }

  if (options.minimum_price_per_night) {
    queryParams.push(options.minimum_price_per_night * 100);
    whereClause.push(`cost_per_night >= $${queryParams.length}`);
  }

  if (options.maximum_price_per_night) {
    queryParams.push(options.maximum_price_per_night * 100);
    whereClause.push(`cost_per_night <= $${queryParams.length}`);
  }

  if (options.owner_id) {
    queryParams.push(`${options.owner_id}`);
    whereClause.push(`owner_id = $${queryParams.length}`)
  }

  if (whereClause.length) {
    queryString = queryString + ' WHERE ' + whereClause.join(' AND ');
  }

  queryString += ' GROUP BY properties.id';

  if (options.minimum_rating) {
    queryParams.push(options.minimum_rating)
    queryString += ` HAVING avg(rating) >= $${queryParams.length}`;
  }

  queryParams.push(limit);
  queryString += ` ORDER BY cost_per_night LIMIT $${queryParams.length}`;
  console.log(queryString, queryParams)

  return pool.query(queryString, queryParams)
    .then(result => {
      return result.rows
    })
    .catch(err => {
      console.log(err.message)
    })
}
exports.getAllProperties = getAllProperties;


/**
 * Add a property to the database
 * @param {{}} property An object containing all of the property details.
 * @return {Promise<{}>} A promise to the property.
 */
const addProperty = function (property) {
  const { owner_id, title, description, thumbnail_photo_url, cover_photo_url, cost_per_night, street, city, province, post_code, country, parking_spaces, number_of_bathrooms, number_of_bedrooms } = property;

  return pool.query(`
    INSERT INTO properties (owner_id, title, description, thumbnail_photo_url, cover_photo_url, cost_per_night, street, city, province, post_code, country, parking_spaces, number_of_bathrooms, number_of_bedrooms)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
    RETURNING *;
  `, [owner_id, title, description, thumbnail_photo_url, cover_photo_url, cost_per_night, street, city, province, post_code, country, parking_spaces, number_of_bathrooms, number_of_bedrooms])
    .then(res => res.rows[0])
}
exports.addProperty = addProperty;
