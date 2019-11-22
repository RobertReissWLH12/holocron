INSERT INTO users (
    email,
    username,
    profile_img
)

VALUES(
    ${email},
    ${username},
    ${profile_img}
);

SELECT user_id FROM users
WHERE username = ${username};