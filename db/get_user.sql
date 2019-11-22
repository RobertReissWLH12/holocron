-- SELECT * FROM users
-- WHERE username = $1;

SELECT count(*) FROM users
WHERE username = $1;