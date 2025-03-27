CREATE TABLE if not exists users (
    user_id smallint,
    name varchar, -- character varying
    age smallint not null,
    gender varchar,
    email varchar unique,
);

INSERT INTO
    users (user_id, name, age, gender)
values
    (1, 'Ali', 20, 'M');

ALTER DATABASE users
RENAME TO odamlar;

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    phone_number VARCHAR(100) NOT NULL UNIQUE,
    address VARCHAR,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
);

CREATE TABLE posts (
    post_id SERIAL PRIMARY KEY,
    title VARCHAR,
    content TEXT,
    slug VARCHAR,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    author_id INT NOT NULL,
    FOREIGN KEY (author_id) REFERENCES users (user_id)
);

INSERT INTO
    users (
        first_name,
        last_name,
        email,
        password,
        phone_number,
        address
    )
VALUES
    ('');

INSERT INTO
    posts (title, content, slug, author_id)
VALUES
    (
        'Javascripda data type',
        'js data types, js data typesjs data typesjs data typesjs data types',
        'javascriptda_data_type',
        1
    ),
    (
        'Javascripda variable turlari',
        'Javascripda variable turlari bilan ishlash',
        'javascripda_variable_turlari',
        2
    ),
    (
        'Nodejsda server yozish',
        'Nodejs da server yozish, Nodejs da server yozish, Nodejs da server yozish',
        'nodejsda_server_yozish',
        100
    );

CREATE TABLE comments (
    comment_id SERIAL PRIMARY KEY,
    content text,
    post_id INT NOT NULL,
    author_id INT NOT NULL,
    FOREIGN KEY (post_id) REFERENCES posts (post_id),
    FOREIGN KEY (author_id) REFERENCES users (user_id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO
    comments (content, post_id, author_id)
VALUES
    ('Momapti', 101, 101);

-- ('yaxshiroq yozish mumkin', 2, 2);
-- ('Judda yomon post bo''pti', 1, 1),
-- ('yaxshiroq yozish mumkin', 2, 2);
