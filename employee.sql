CREATE TABle employee (
    employee_id SERIAL PRIMARY KEY,
    name VARCHAR,
    age smallint,
    salary decimal,
    cdeparment VARCHAR,
    status VARCHAR,
    level smallint
);


CREATE TABle deparment (
    deparment_id SERIAL PRIMARY KEY,
    name VARCHAR
);

insert into
    deparment (name)
values
    ('Dasturlash'), ('Media'), ('Marketing'), ('Bug''alteriya'), ('O''quv'),('Rahbariyat');

--
insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Davis', 1, 14.99, 'Tools', false, 1);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Fonzie', 2, 2.99, 'Movies', true, 2);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Normand', 3, 7.99, 'Electronics', true, 3);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Ellis', 4, 3.99, 'Jewelry', false, 4);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Laetitia', 5, 3.29, 'Home', false, 5);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Kaylil', 6, 49.99, 'Grocery', false, 6);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Weber', 7, 179.99, 'Baby', false, 7);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Henrie', 8, 29.99, 'Clothing', false, 8);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Madge', 9, 59.99, 'Sports', false, 9);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Kinna', 10, 4.99, 'Automotive', true, 10);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Cindra', 11, 2.49, 'Automotive', true, 11);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Wilma', 12, 4.49, 'Electronics', true, 12);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Karlan', 13, 19.99, 'Automotive', false, 13);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Drugi', 14, 22.99, 'Movies', true, 14);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Lilah', 15, 2.29, 'Shoes', false, 15);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Dorthy', 16, 29.99, 'Garden', true, 16);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Skelly', 17, 19.99, 'Sports', true, 17);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Josephine', 18, 29.99, 'Tools', true, 18);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Rodi', 19, 4.89, 'Beauty', true, 19);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Maxy', 20, 19.99, 'Books', false, 20);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Goldarina', 21, 39.99, 'Shoes', false, 21);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Blancha', 22, 24.99, 'Health', false, 22);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Clemente', 23, 49.99, 'Movies', true, 23);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Piper', 24, 5.99, 'Garden', true, 24);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Delbert', 25, 1.99, 'Outdoors', false, 25);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Kurtis', 26, 34.99, 'Grocery', true, 26);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Waylen', 27, 19.99, 'Music', false, 27);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Peta', 28, 34.99, 'Shoes', true, 28);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Dennet', 29, 29.99, 'Electronics', false, 29);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Viva', 30, 15.99, 'Tools', false, 30);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Jocelyn', 31, 4.29, 'Home', false, 31);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Tracey', 32, 39.99, 'Home', false, 32);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Dorey', 33, 29.99, 'Kids', true, 33);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Horst', 34, 7.99, 'Games', true, 34);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Imojean', 35, 39.99, 'Garden', true, 35);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Nester', 36, 19.99, 'Clothing', true, 36);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Joann', 37, 15.99, 'Home', false, 37);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Tore', 38, 3.99, 'Industrial', true, 38);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Joan', 39, 3.49, 'Toys', true, 39);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Brynn', 40, 5.99, 'Industrial', false, 40);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Zachariah', 41, 39.99, 'Grocery', false, 41);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Jereme', 42, 19.99, 'Movies', true, 42);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Wendeline', 43, 44.99, 'Garden', true, 43);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Walton', 44, 22.99, 'Books', false, 44);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Kath', 45, 19.99, 'Games', true, 45);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Aleda', 46, 2.49, 'Games', true, 46);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Osbourn', 47, 24.99, 'Home', true, 47);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Foster', 48, 12.99, 'Outdoors', false, 48);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Keslie', 49, 3.79, 'Baby', false, 49);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Chevy', 50, 18.99, 'Beauty', true, 50);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Berton', 51, 79.99, 'Industrial', false, 51);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Lucina', 52, 4.99, 'Movies', false, 52);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Catarina', 53, 34.99, 'Garden', false, 53);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Querida', 54, 6.99, 'Movies', true, 54);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Dulci', 55, 2.29, 'Movies', true, 55);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Merry', 56, 34.99, 'Baby', true, 56);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Lyndsie', 57, 19.99, 'Baby', true, 57);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Teriann', 58, 249.99, 'Garden', true, 58);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Pammi', 59, 3.79, 'Music', true, 59);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Bailie', 60, 3.49, 'Games', true, 60);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Shawnee', 61, 59.99, 'Kids', false, 61);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Jessika', 62, 7.99, 'Games', false, 62);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Brynn', 63, 169.99, 'Grocery', false, 63);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Waneta', 64, 3.99, 'Health', false, 64);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Ellery', 65, 4.29, 'Baby', false, 65);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Cyrille', 66, 49.99, 'Toys', true, 66);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Bride', 67, 2.99, 'Grocery', false, 67);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Mirelle', 68, 5.99, 'Automotive', true, 68);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Pierce', 69, 19.99, 'Movies', false, 69);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Susanetta', 70, 19.99, 'Electronics', true, 70);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Malorie', 71, 24.99, 'Music', false, 71);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Gibb', 72, 2.99, 'Tools', true, 72);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Yolanthe', 73, 34.99, 'Sports', true, 73);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Andrey', 74, 11.99, 'Movies', true, 74);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Pammie', 75, 9.99, 'Jewelry', true, 75);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Carlos', 76, 3.49, 'Shoes', true, 76);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Judith', 77, 29.99, 'Clothing', false, 77);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Aile', 78, 2.49, 'Electronics', true, 78);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Ada', 79, 39.99, 'Grocery', false, 79);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Carolus', 80, 4.49, 'Grocery', true, 80);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Craggy', 81, 22.99, 'Shoes', true, 81);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Judd', 82, 39.99, 'Kids', true, 82);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Sonnie', 83, 199.99, 'Jewelry', true, 83);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Pen', 84, 15.99, 'Toys', true, 84);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Ros', 85, 4.99, 'Shoes', false, 85);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Cory', 86, 3.19, 'Tools', false, 86);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Kathye', 87, 5.99, 'Sports', true, 87);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Marsh', 88, 39.99, 'Beauty', false, 88);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Antoine', 89, 4.29, 'Sports', true, 89);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Chlo', 90, 35, 'Home', true, 90);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Dorian', 91, 3.29, 'Health', true, 91);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Irma', 92, 19.99, 'Home', false, 92);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Patsy', 93, 3.49, 'Jewelry', true, 93);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Yurik', 94, 3.49, 'Baby', false, 94);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Betteann', 95, 99.99, 'Industrial', true, 95);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Clerkclaude', 96, 39.99, 'Clothing', false, 96);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Junette', 97, 4.99, 'Baby', true, 97);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Allina', 98, 79.99, 'Industrial', false, 98);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Jackson', 99, 2.49, 'Kids', true, 99);

insert into
    employee (name, age, salary, deparment, status, level)
values
    ('Crosby', 100, 2.99, 'Movies', false, 100)
    ---- sub query
SELECT
    AVG(salary)
FROM
    employee;

SELECT
    *
FROM
    employee
WHERE
    salary > 27.4231000000000000

---

SELECT
    *
FROM
    employee
WHERE
    salary > (
            SELECT
                AVG(salary)
            FROM
                employee;
    );

    --
    SELECT * from deparment WHERE deparment_id = (
        SELECT department_id FROM employee WHERE salary = (
                SELECT MAX(salary) from employee
        )
    )



CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    name   VARCHAR
)



CREATE TABLE grades (
    id SERIAL PRIMARY KEY,
    student_id INT references students (id) NOT NULL,
    subject  VARCHAR,
    GRADE INT
    )

    ;
INSERT INTO students (name) values ('Umidjon'), ('Abdulhamid'),('Diyorbek'),('Abdulxaq');
--
INSERT INTO grades (subject, grade, student_id) values
('Ona tili', 2, 1),
('Matematika', 4, 2),
('Ona tili', 5, 3),
('Fizika', 4, 4);
--

SELECT * from students WHERE id in (
    SELECT student_id from grades WHERE GRADE >= 4;
    );
-- index

CREATE INDEX IF NOT EXISTS idx_name on students (name);

create type Roles as enum ('user','manager', 'moderator');
--
create table emp (
    id serial primary key,
    name varchar,
    role Roles,
    salary decimal
);
