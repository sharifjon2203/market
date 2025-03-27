CREATE TABLE if not exists users (
    user_id smallint,
    name varchar, -- character varying
    age smallint,
    gender varchar
);

INSERT INTO
    users (user_id, name, age, gender)
values
    (1, 'Ali', 20, 'M');
