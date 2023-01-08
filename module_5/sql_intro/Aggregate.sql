-- ● Calculate the average GPA for all students
SELECT AVG(gpa) FROM students;

-- ● Get the number of students in their last (4) year
SELECT COUNT(*) FROM students WHERE year = 4;

-- Get the average GPA for every major and then with average > 3.0
