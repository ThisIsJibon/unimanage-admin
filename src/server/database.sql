--schema definition


CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username INTEGER NOT NULL UNIQUE,
    passhash VARCHAR NOT NULL
);


CREATE TABLE Student (
  reg_no INTEGER PRIMARY KEY,
  name TEXT,
  dept_id TEXT,
  session INTEGER,
  address TEXT
);


CREATE TABLE Student_Email (
  reg_no INTEGER PRIMARY KEY,
  email TEXT
);


CREATE TABLE Student_Contact (
  reg_no INTEGER PRIMARY KEY,
  contact INTEGER
);


CREATE TABLE Teacher (
  teacher_id SERIAL PRIMARY KEY,
  name TEXT,
  dept_id TEXT NOT NULL,
  designation TEXT NOT NULL
);


CREATE TABLE Teacher_Email (
  teacher_id INTEGER PRIMARY KEY,
  email TEXT
);


CREATE TABLE Teacher_Contact (
  teacher_id INTEGER PRIMARY KEY,
  contact INTEGER
);


CREATE TABLE Course (
  course_id TEXT PRIMARY KEY,
  dept_id TEXT NOT NULL,
  name TEXT NOT NULL,
  credit FLOAT NOT NULL,
  semester INTEGER NOT NULL
);


CREATE TABLE Section (
  section_id TEXT PRIMARY KEY,
  course_id TEXT NOT NULL,
  teacher_id INTEGER NOT NULL,
  year INTEGER NOT NULL
);


CREATE TABLE Course_Enrollment (
  id SERIAL,
  section_id TEXT,
  reg_no INTEGER NOT NULL,
  grade FLOAT
);


CREATE TABLE Department (
  dept_id TEXT PRIMARY KEY,
  name TEXT NOT NULL
);


CREATE TABLE Head_of_Department (
  dept_id TEXT PRIMARY KEY,
  teacher_id INTEGER,
  joining_date DATE NOT NULL DEFAULT CURRENT_DATE,
  finishing_date DATE
);


CREATE TABLE Classroom (
  classroom_id TEXT PRIMARY KEY,
  dept_id TEXT NOT NULL,
  room_num INTEGER NOT NULL,
  building TEXT NOT NULL  
);


CREATE TABLE Time_Slot (
  time_slot_id SERIAL PRIMARY KEY,
  date DATE NOT NULL DEFAULT CURRENT_DATE,
  section_id TEXT NOT NULL,
  classroom_id TEXT NOT NULL,
  start_time TIME NOT NULL,
  end_time TIME NOT NULL
);



--dummy data

INSERT INTO Student (reg_no,name,dept_id,session,address) 
  VALUES (2018331002,'Mehedi Hasan', 'CSE', 2018,'Sylhet');

SELECT * FROM Student;



INSERT INTO Student_Email (reg_no,email) 
  VALUES (2018331002,'jibon@gmail.com');

SELECT * FROM Student_Email;



INSERT INTO Student_Contact (reg_no,contact) 
  VALUES (2018331002,01706323578);

SELECT * FROM Student_Contact;




INSERT INTO Teacher (teacher_id,name,dept_id,designation) 
  VALUES (1,'Sakib Khan', 'CSE','Lecturer');

INSERT INTO Teacher VALUES (2,'Ananta Jalil','CSE','Lecturer');
INSERT INTO Teacher VALUES (3,'Hero Alam','CSE','Professor');
INSERT INTO Teacher VALUES (4,'Alfeh Sani','PHY','Lecturer');
INSERT INTO Teacher VALUES (5,'Joshim','BBA','Lecturer');
INSERT INTO Teacher VALUES (6,'Omor Sani','IPE','Lecturer');

SELECT * FROM Teacher;



INSERT INTO Teacher_Email (teacher_id,email) 
  VALUES (1,'mridul@gmail.com');


SELECT * FROM Teacher_Email;



INSERT INTO Teacher_Contact (teacher_id,contact) 
  VALUES (1,01111345683);

SELECT * FROM Teacher_Contact;


INSERT INTO Course (course_id,dept_id,name,credit,semester) 
  VALUES ('CSE121', 'CSE', 'Data Structure',3.0,1);

INSERT INTO Course VALUES('CSE150','CSE','Competitive Programming',1.5, 1);
INSERT INTO Course VALUES('CSE250','CSE','Project Work',1.5, 3);
INSERT INTO Course VALUES('IPE150','IPE','IPE Workshop',1.0, 1);
INSERT INTO Course VALUES('IPE220','IPE','IPE Graphics',2.0, 4);
INSERT INTO Course VALUES('CSE333','CSE','Database Systems',3.00, 5);
INSERT INTO Course VALUES('CSE327','CSE','Database Systems Lab',2.00, 5);
INSERT INTO Course VALUES('CSE328','CSE','Operating Systems',1.5, 1);
INSERT INTO Course VALUES('CSE329','CSE','Operating Systems Lab',1.5, 1);
INSERT INTO Course VALUES('CSE233','CSE','Data Structures',3.00, 3);
INSERT INTO Course VALUES('CSE234','CSE','Data Structures Lab',2.00, 3);
INSERT INTO Course VALUES('CSE242','CSE','Numerical Analysis',3.00, 4);
INSERT INTO Course VALUES('CSE243','CSE','Numerical Analysis Lab',1.00, 4);
INSERT INTO Course VALUES('BUS201D','BBA','Accounting and Finance',3.00, 3);
INSERT INTO Course VALUES('ECO203D','ECO','Basic Economics',3.00, 4);
INSERT INTO Course VALUES('PHY107D','PHY','Linear Optics',3.00, 1);


SELECT * FROM Course;


INSERT INTO Section (section_id,course_id,teacher_id,year) 
  VALUES ('CSE121-2022','CSE121',1,2022);

INSERT INTO Section VALUES ('CSE328-2022','CSE328',2,2022);
INSERT INTO Section VALUES ('BUS201D-2022','BUS201D',5,2022);
INSERT INTO Section VALUES ('PHY107D-2020','PHY107D',4,2020);
INSERT INTO Section VALUES ('CSE328-2021','CSE328',2,2021);
INSERT INTO Section VALUES ('BUS201D-2021','BUS201D',5,2021);
INSERT INTO Section VALUES ('IPE150-2021','IPE150',6,2021);
INSERT INTO Section VALUES ('IPE150-2022','IPE150',6,2022);
INSERT INTO Section VALUES ('IPE120-2022','IPE120',6,2022);


SELECT * FROM Section;


INSERT INTO Course_Enrollment (section_id,reg_no,grade) 
  VALUES (1, 2018331002,5.00);

--5.00 is invalid grade

INSERT INTO Course_Enrollment (section_id,reg_no,grade) VALUES ('CSE328-2022', 2018331002,4.00);
INSERT INTO Course_Enrollment (section_id,reg_no,grade) VALUES ('CSE328-2022', 2018331001,1.50);
INSERT INTO Course_Enrollment (section_id,reg_no,grade) VALUES ('CSE328-2022', 2018331003,3.75);
INSERT INTO Course_Enrollment (section_id,reg_no,grade) VALUES ('CSE328-2022', 2018331054,4.00);

INSERT INTO Course_Enrollment (section_id,reg_no,grade) VALUES ('PHY107D-2020', 2018331002,3.75);
INSERT INTO Course_Enrollment (section_id,reg_no,grade) VALUES ('PHY107D-2020', 2018331001,2.00);
INSERT INTO Course_Enrollment (section_id,reg_no,grade) VALUES ('PHY107D-2020', 2018331003,2.75);
INSERT INTO Course_Enrollment (section_id,reg_no,grade) VALUES ('PHY107D-2020', 2018331054,3.50);

INSERT INTO Course_Enrollment (section_id,reg_no,grade) VALUES ('IPE150-2021', 2018331002,2.00);
INSERT INTO Course_Enrollment (section_id,reg_no,grade) VALUES ('IPE150-2021', 2018331001,3.00);
INSERT INTO Course_Enrollment (section_id,reg_no,grade) VALUES ('IPE150-2021', 2018331003,3.25);
INSERT INTO Course_Enrollment (section_id,reg_no,grade) VALUES ('IPE150-2021', 2018331054,5.00);

INSERT INTO Course_Enrollment (section_id,reg_no,grade) VALUES ('BUS201D-2022', 2018331002,2.50);
INSERT INTO Course_Enrollment (section_id,reg_no,grade) VALUES ('BUS201D-2022', 2018331001,3.25);
INSERT INTO Course_Enrollment (section_id,reg_no,grade) VALUES ('BUS201D-2022', 2018331003,3.75);
INSERT INTO Course_Enrollment (section_id,reg_no,grade) VALUES ('BUS201D-2022', 2018331054,3.00);

INSERT INTO Course_Enrollment (section_id,reg_no,grade) VALUES ('CSE121-2022', 2018331002,0.00);
INSERT INTO Course_Enrollment (section_id,reg_no,grade) VALUES ('CSE328-2022', 2018331002,0.00);

SELECT * FROM Course_Enrollment;



INSERT INTO Department (dept_id,name) 
  VALUES ('CSE','Computer Science and Engineering');

INSERT INTO Department VALUES('IPE','Industrial Production and Engineering');
INSERT INTO Department VALUES('ECO','Economics');
INSERT INTO Department VALUES('BBA','Bachelors in Business Administration');
INSERT INTO Department VALUES('PHY','Physics');
INSERT INTO Department VALUES('MAT','Mathematics');

SELECT * FROM Department;



INSERT INTO Head_of_Department (dept_id,teacher_id) 
  VALUES ('CSE',1);

SELECT * FROM Head_of_Department;



INSERT INTO Classroom (classroom_id,dept_id,room_num,building) 
  VALUES ('333-A','CSE',333,'IICT');
INSERT INTO Classroom VALUES ('333-A','PHY',333,'A');
INSERT INTO Classroom VALUES ('104-D','BUS',104,'D');
INSERT INTO Classroom VALUES ('201-E','IPE',201,'E');
INSERT INTO Classroom VALUES ('433-IICT','EEE',433,'IICT');

SELECT * FROM Classroom;



INSERT INTO Time_Slot (section_id,classroom_id,start_time,end_time) 
  VALUES ('CSE121-2022','333-A','11:05','12:05');
INSERT INTO Time_Slot(section_id,classroom_id,start_time,end_time)  VALUES ('CSE328-2022','104-D','13:05','14:05');
INSERT INTO Time_Slot(section_id,classroom_id,start_time,end_time)  VALUES ('IPE150-2022','201-E','15:05','16:05');
INSERT INTO Time_Slot(section_id,classroom_id,start_time,end_time)  VALUES ('IPE150-2021','201-E','13:05','14:05');
SELECT * FROM Time_Slot;


--JOINS

-- results


select
  * 
from student s
  inner join course_enrollment e using (reg_no) 
  inner join section se using (section_id) 
  inner join course c using (course_id)
order by s.reg_no;


-- get schedules for logged in user [grade 0.00 in course enrollment means ongoing course]

select 
  *
from course_enrollment 
inner join time_slot using(section_id)
where reg_no = user.reg_no and grade = 0;