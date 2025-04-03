BEGIN transaction;

INSERT INTO
    departments (name)
VALUES
    ('Tozalov');

INSERT INTO
    WORKERS (name, role, salary, department_id)
VALUES
    ('Umidjon', 'DASTURCHI', 10000, 1);

COMMIT;
