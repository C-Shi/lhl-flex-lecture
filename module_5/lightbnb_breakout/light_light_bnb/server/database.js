const { Pool } = require('pg');

const pool = new Pool({
  user: 'lighthouse',
  password: 'lighthouse',
  database: 'lightBNB',
  host: 'localhost'
})
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
