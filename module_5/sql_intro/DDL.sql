-- 1. Create a Table called majors, containing an auto incremented id and a name;
CREATE TABLE IF NOT EXISTS majors (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

-- 2. Create a Table called students, containing an auto incremented id, name and email.
CREATE TABLE IF NOT EXISTS students (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL
);

-- 3. Modify students table, add a column called major_id, that is a referencing the id of majors table
ALTER TABLE students
ADD COLUMN major_id INTEGER REFERENCES majors(id) ON DELETE SET NULL DEFAULT NULL;


-- 4. Modify students table, add a column called year
ALTER TABLE students
ADD COLUMN year INTEGER DEFAULT 1;

-- 5. Drop students table
DROP TABLE students;

-- 6. Drop majors table
DROP TABLE majors;