SELECT
    *
FROM
    users AS u
    JOIN posts AS p ON u.user_id = p.author_id;

--
SELECT
    *
FROM
    posts as p
    JOIN comments as c ON p.author_id = c.author_id;
