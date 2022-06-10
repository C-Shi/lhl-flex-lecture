DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS properties CASCADE;
DROP TABLE IF EXISTS reservations CASCADE;
DROP TABLE IF EXISTS property_reviews CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE properties (
  id SERIAL PRIMARY KEY,
  owner_id INT REFERENCES users(id),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  cost_per_night INT NOT NULL,
  parking_spaces INT DEFAULT 0,
  number_of_bathrooms INT DEFAULT 0,
  number_of_bedrooms INT DEFAULT 0,
  thumbnail_photo_url TEXT,
  cover_photo_url TEXT,
  country VARCHAR(255),
  street VARCHAR(255),
  city VARCHAR(255),
  province VARCHAR(255),
  post_code VARCHAR(10),
  active BOOLEAN DEFAULT TRUE
);

CREATE TABLE reservations (
  id SERIAL PRIMARY KEY,
  guest_id INT REFERENCES users(id),
  property_id INT REFERENCES properties(id),
  start_date DATE DEFAULT CURRENT_DATE,
  end_date DATE DEFAULT CURRENT_DATE
);

CREATE TABLE property_reviews (
  id SERIAL PRIMARY KEY,
  reservation_id INT REFERENCES reservations(id),
  guest_id INT REFERENCES users(id),
  property_id INT REFERENCES users(id),
  message TEXT,
  rating INT NOT NULL DEFAULT 5
);