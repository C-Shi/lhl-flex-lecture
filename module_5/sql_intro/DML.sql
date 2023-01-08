-- 1. Add a major called Psychology to majors table
INSERT INTO majors (name) VALUES ('Psychology');

-- 2. Add a second year student called Travis, whose email is travis@gmail.com. His gpa is 3.2 and he does not have a major yet.
INSERT INTO students (name, email, year, gpa) VALUES ('Travis', 'travis@gmail.com', 2, 3.2);

-- 3. Pull report for all students name and email.
SELECT name, email FROM students;

-- 4. Pull report for all third and fourth year students
SELECT * FROM students WHERE year >= 3;

-- 5. Pull report for the 3 students with highest GPA
SELECT * FROM students ORDER BY gpa DESC LIMIT 3;

-- 6. Modify John’s email to john@hotmail.com use single quote
UPDATE students SET email = 'john@hotmail.com' WHERE id = 1;

-- 7. Remove student Ryan from the table
DELETE FROM students WHERE name = 'Ryan';

-- 8. Pull report for all students’ name and major
SELECT name, major_id FROM students;