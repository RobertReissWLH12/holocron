INSERT INTO users (
    email,
    username
)

VALUES(
    ${email},
    ${username}
);

SELECT user_id FROM users
WHERE username = ${username};