DROP TABLE IF EXISTS students;
DROP TABLE IF EXISTS majors;

CREATE TABLE students (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  year INTEGER NOT NULL,
  gpa DECIMAL(2, 1) DEFAULT 0.00
);

CREATE TABLE majors (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(100) NOT NULL
);

ALTER TABLE students
ADD COLUMN major_id INTEGER REFERENCES majors(id) ON DELETE SET NULL; 

INSERT INTO majors (name) VALUES
('Biology'), ('Chemistry'), ('Math'), ('English'), ('Fine Art'), ('Computer Science'), ('Economy'), ('French');

INSERT INTO students (name, email, year, gpa, major_id) VALUES
('John', 'john@gmail.com', 1, 3.1, 1),
('Bob', 'bob@gmail.com', 1, 3.7, 2),
('David', 'david@gmail.com', 2, 3.9 ,1),
('Jane', 'jane@gmail.com', 2, 3.6, 4),
('Cathy', 'cathy@gmail.com', 2, 3.0, 1),
('Thomas', 'thomas@gmail.com', 3, 2.8, 5),
('William', 'william@gmail.com', 4, 4.0, 3),
('Daniel', 'dan@gmail.com', 4, 2.9, 7),
('Kevin', 'kevin@gmail.com', 4, 3.0, 6),
('Ryan', 'ryan@gmail.com', 4, 3.0, 4),
('Edward', 'edward@gmail.com', 4, 3.1, NULL);
