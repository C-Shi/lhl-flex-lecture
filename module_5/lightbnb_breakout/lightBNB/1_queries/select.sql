SELECT id, name, email, password
FROM users
WHERE email = 'tristanjacobs@gmail.com';

SELECT avg(end_date - start_date) as average_duration
FROM reservations;

SELECT properties.id, title, cost_per_night, avg(property_reviews.rating) as average_rating
FROM properties
LEFT JOIN property_reviews ON properties.id = property_id
WHERE city LIKE '%ancouv%'
GROUP BY properties.id
HAVING avg(property_reviews.rating) >= 4
ORDER BY cost_per_night
LIMIT 10;


SELECT properties.city, count(reservations) as total_reservations
FROM reservations
JOIN properties ON property_id = properties.id
GROUP BY properties.city
ORDER BY total_reservations DESC;


-- Get all resevation for a guest and the its property reviews
SELECT reservations.id, properties.title, properties.cost_per_night, reservations.start_date, avg(rating) as average_rating
FROM reservations
JOIN properties ON reservations.property_id = properties.id
JOIN property_reviews ON properties.id = property_reviews.property_id
WHERE reservations.guest_id = 1
GROUP BY properties.id, reservations.id
ORDER BY reservations.start_date
LIMIT 10;

-- OR USE subquery
SELECT reservations.id, properties.title, properties.cost_per_night, reservations.start_date,
(
	SELECT avg(rating) as average_rating FROM property_reviews
	WHERE property_id = properties.id
	GROUP BY property_id 
)
FROM reservations
JOIN properties ON reservations.property_id = properties.id
WHERE reservations.guest_id = 1
GROUP BY properties.id, reservations.id
ORDER BY reservations.start_date
LIMIT 10;

-- 1 reservations has multiple reviews, that's why you need to join property_id instead of reservation id