const { Pool } = require('pg');

const pool = new Pool({
  user: 'lighthouse',
  password: 'lighthouse',
  database: 'lightBNB',
  host: 'localhost'
})

function table(table) {
  let _qParams = [];
  let _qString = '';

  let _select = '';
  let _insert = '';
  let _where = '';
  let _join = '';
  let _groupBy = '';
  let _having = '';
  let _limit = '';
  let _orderBy = '';

  return {
    _build: function() {
      _qString += _select + _join + _where  + _groupBy + _having + _orderBy + _limit;
      console.log(_qString, _qParams)
    },
    select: function(fields) {
      _select = `SELECT ${fields ? fields.join(', ') : '*'} FROM ${table}`;
      return this;
    },
    insert: function(...fields) {
      const columns = [];
      const values = [];
      fields.forEach(({ field, value }) => {
        _qParams.push(value);
        columns.push(field);
        values.push(`$${_qParams.length}`)
      })
      _insert = `INSERT INTO ${table} (${columns.join(', ')}) VALUES (${values.join(', ')}) RETURNING *`;
      return this;
    },
    update: function() {

    },
    join: function(table, key1, key2) {
      _join += ` JOIN ${table} ON ${key1} = ${key2}`
      return this;
    },
    where: function(field, value, op = '=') {
      _qParams.push(value);
      if (_where === '') {
        _where = ` WHERE ${field} ${op} $${_qParams.length}`
      } else {
        _where = ` AND ${field} ${op} $${_qParams.length}`
      }
      return this;
    },
    groupBy: function(fields) {
      _groupBy = ` GROUP BY ${fields.join(', ')}`;
      return this;
    },
    having: function(field, value, op = '=') {
      _qParams.push(value);
      if (_having === '') {
        _having = ` HAVING ${field} ${op} $${_qParams.length}`
      } else {
        _having = ` AND ${field} ${op} $${_qParams.length}`
      }
      return this;
    },
    limit: function(limit) {
      _qParams.push(limit);
      _limit = ` LIMIT $${_qParams.length}`
      return this;
    },
    orderBy: function(field, order = 'ASC') {
      _orderBy = ` ORDER BY ${field} ${order}`;
      return this;
    },
    when: function(condition, cb) {
      if (condition) {
        return cb(this)
      }
      return this
    },
    first: function() {
      this._build()
      return pool.query(_qString, _qParams)
        .then(result => result.rows[0])
        .catch(err => console.error(err.message))
    },
    all: function() {
      this._build()
      return pool.query(_qString, _qParams)
        .then(result => {
          return result.rows
        })
        .catch(err => console.error(err.message))
    }
  }
}

/**
 * Get a single user from the database given their email.
 * @param {String} email The email of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithEmail = function (email) {
  return table('users')
    .select()
    .where('email', email.toLowerCase())
    .first()
}
exports.getUserWithEmail = getUserWithEmail;

/**
 * Get a single user from the database given their id.
 * @param {string} id The id of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithId = function (id) {
  return table('users')
    .select()
    .where('id', id)
    .first()
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
  return table('reservations')
    .select()
    .join('properties', 'reservations.property_id', 'properties.id')
    .where('reservations.guest_id', guest_id)
    .limit(limit)
    .all()
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

  return table('properties')
    .select(['properties.*', 'avg(property_reviews.rating) as average_rating'])
    .when(options.owner_id, function(q) {
      return q.where('owner_id', options.owner_id)
    })
    .when(options.city, function(q) {
      return q.where('LOWER(city)', `%${options.city.toLowerCase()}%`, 'LIKE')
    })
    .when(options.minimum_price_per_night, function(q) {
      return q.where('cost_per_night', options.minimum_price_per_night * 100, '>=')
    })
    .when(options.maximum_price_per_night, function(q) {
      return q.where('cost_per_night', options.maximum_price_per_night * 100, '<=')
    })
    .join('property_reviews', 'properties.id', 'property_id')
    .groupBy(['properties.id'])
    .when(options.minimum_rating, function(q) {
      return q.having('avg(rating)', options.minimum_rating, '>=')
    })
    .orderBy('cost_per_night')
    .limit(limit)
    .all()

}
exports.getAllProperties = getAllProperties;


/**
 * Add a property to the database
 * @param {{}} property An object containing all of the property details.
 * @return {Promise<{}>} A promise to the property.
 */
const addProperty = function (property) {
  const { owner_id, title, description, thumbnail_photo_url, cover_photo_url, cost_per_night, street, city, province, post_code, country, parking_spaces, number_of_bathrooms, number_of_bedrooms } = property;

  return table('properties').insert(...property)
  return query(`
    INSERT INTO properties (owner_id, title, description, thumbnail_photo_url, cover_photo_url, cost_per_night, street, city, province, post_code, country, parking_spaces, number_of_bathrooms, number_of_bedrooms)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
    RETURNING *;
  `, [owner_id, title, description, thumbnail_photo_url, cover_photo_url, cost_per_night, street, city, province, post_code, country, parking_spaces, number_of_bathrooms, number_of_bedrooms])
    .then(first)
}
exports.addProperty = addProperty;
