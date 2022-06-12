const { Pool } = require('pg');

const pool = new Pool({
  user: 'lighthouse',
  password: 'lighthouse',
  database: 'lightBNB',
  host: 'localhost'
})

function query(qString, qParams) {
  console.log('Executed Query: ', qString);
  console.log('Query params: ', qParams);
  return pool.query(qString, qParams)
    .then(result => result.rows)
    .catch(err => console.error(err.message))
}

function first(data) {
  return data[0] || null;
}

function all(data) {
  return data;
}

/**
 * Get a single user from the database given their email.
 * @param {String} email The email of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithEmail = function (email) {
  return query('SELECT * FROM users WHERE LOWER(email) = $1', [email.toLowerCase()])
    .then(first)
}
exports.getUserWithEmail = getUserWithEmail;

/**
 * Get a single user from the database given their id.
 * @param {string} id The id of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithId = function (id) {
  return query('SELECT * FROM users WHERE id = $1', [id])
    .then(first)
}
exports.getUserWithId = getUserWithId;


/**
 * Add a new user to the database.
 * @param {{name: string, password: string, email: string}} user
 * @return {Promise<{}>} A promise to the user.
 */
const addUser = function (user) {
  const { name, email, password } = user;
  return query(`
    INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *;
  `, [name, email, password])
    .then(first)
}
exports.addUser = addUser;

/// Reservations

/**
 * Get all reservations for a single user.
 * @param {string} guest_id The id of the user.
 * @return {Promise<[{}]>} A promise to the reservations.
 */
const getAllReservations = function (guest_id, limit = 10) {
  return query(`
    SELECT * FROM reservations JOIN properties ON reservations.property_id = properties.id
    WHERE reservations.guest_id = $1 LIMIT $2;
  `, [guest_id, limit])
    .then(all)
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

  return query(queryString, queryParams)
    .then(all)
}
exports.getAllProperties = getAllProperties;


/**
 * Add a property to the database
 * @param {{}} property An object containing all of the property details.
 * @return {Promise<{}>} A promise to the property.
 */
const addProperty = function (property) {
  const { owner_id, title, description, thumbnail_photo_url, cover_photo_url, cost_per_night, street, city, province, post_code, country, parking_spaces, number_of_bathrooms, number_of_bedrooms } = property;

  return query(`
    INSERT INTO properties (owner_id, title, description, thumbnail_photo_url, cover_photo_url, cost_per_night, street, city, province, post_code, country, parking_spaces, number_of_bathrooms, number_of_bedrooms)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
    RETURNING *;
  `, [owner_id, title, description, thumbnail_photo_url, cover_photo_url, cost_per_night, street, city, province, post_code, country, parking_spaces, number_of_bathrooms, number_of_bedrooms])
    .then(first)
}
exports.addProperty = addProperty;
