DROP TABLE IF EXISTS users_hash;
DROP TABLE IF EXISTS portraits;
DROP TABLE IF EXISTS badges;
DROP TABLE IF EXISTS user_favorites;
DROP TABLE IF EXISTS archives;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
	user_id SERIAL PRIMARY KEY,
	email VARCHAR,
	username VARCHAR(100),
	portrait TEXT 
);

CREATE TABLE users_hash (
	hash_id SERIAL PRIMARY KEY,
	hash TEXT,
	user_id INT REFERENCES users(user_id)
);

CREATE TABLE portraits (
	picture_id SERIAL PRIMARY KEY,
	image TEXT,
	user_id INT REFERENCES users(user_id)
);

CREATE TABLE badges (
	badge_id SERIAL PRIMARY KEY,
	title VARCHAR(100),
    description TEXT,
	user_id INT REFERENCES users(user_id)
);

CREATE TABLE archives (
	archives_id SERIAL PRIMARY KEY,
	title TEXT,
	author TEXT,
	pages INT,
    characters TEXT,
    image TEXT,
	search_image TEXT,
    summary TEXT
);

CREATE TABLE user_favorites (
	favorite_id SERIAL PRIMARY KEY,
	user_id INT REFERENCES users(user_id),
	archives_id INT REFERENCES archives(archives_id)
);

SELECT * FROM users;
SELECT * FROM users_hash;
SELECT * FROM portraits;
SELECT * FROM badges;
SELECT * FROM archives;
SELECT * FROM user_favorites;


INSERT INTO users_hash (hash, user_id)
VALUES ('password', 1),
('s3cret', 2);
