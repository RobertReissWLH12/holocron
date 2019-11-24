DROP TABLE IF EXISTS users_hash;
DROP TABLE IF EXISTS profile_pics;
DROP TABLE IF EXISTS badges;
DROP TABLE IF EXISTS user_favorites;
DROP TABLE IF EXISTS archives;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
	user_id SERIAL PRIMARY KEY,
	email VARCHAR,
	username VARCHAR(100),
	profile_img TEXT
);

CREATE TABLE users_hash (
	hash_id SERIAL PRIMARY KEY,
	hash TEXT,
	user_id INT REFERENCES users(user_id)
);

CREATE TABLE profile_pics (
	picture_id SERIAL PRIMARY KEY,
	img_url TEXT,
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
    summary TEXT
);

CREATE TABLE user_favorites (
	favorite_id SERIAL PRIMARY KEY,
	archives_id INT REFERENCES archives(archives_id)
);

SELECT * FROM users;
SELECT * FROM users_hash;
SELECT * FROM profile_pics;
SELECT * FROM badges;
SELECT * FROM archives;
SELECT * FROM user_favorites;


INSERT INTO users (email, username, profile_img)
VALUES 
('dorianvey85@gmail.com', 'DorianVey', 'https://tmssl.akamaized.net/images/portrait/originals/38232-1556523583.jpg'),
('josh', 'josh@josh.com', 'https://josh-mccann.com/images/pic11.JPG');

INSERT INTO users_hash (hash, user_id)
VALUES ('password', 1),
('s3cret', 2);

-- INSERT INTO archives (
-- title, 	
-- author, 
-- pages, 
-- characters, 
-- image, 
-- summary
-- ) VALUES (
-- 'The Old Republic: Revan', 
-- 'Drew Karpyshyn', 
-- 298, 
-- 'Revan, Bastila Shan, Canderous Ordo, Lord Scourge, Darth Nyriss, Darth Xedrix', 
-- 'SB-Revan.png', 
-- 'Revan: hero, traitor, conqueror, villain, savior. A Jedi who left Coruscant to defeat Mandalorians — and returned a disciple of the dark side, bent on destroying the Republic. The Jedi Council gave Revan his life back, but the price of redemption was high. His memories have been erased. All that"s left are nightmares — and deep, abiding fear.  What exactly happened beyond the Outer Rim? Revan can"t quite remember, yet can’t entirely forget. Somehow he stumbled across a terrible secret that threatens the very existence of the Republic. With no idea what it is, or how to stop it, Revan may very well fail, for he"s never faced a more powerful and diabolic enemy. But only death can stop him from trying.'
-- ),

-- (
-- 'Dawn of the Jedi: Into the Void', 
-- 'Tim Lebbon', 
-- 320, 
-- 'Lanoree Brock, Dalien Brock, Tre Sana, Lorus', 
-- 'SB-DawnOTJedi.png', 
-- 'On the planet Tython, the ancient Je"daii order was founded. And at the feet of its wise Masters, Lanoree Brock learned the mysteries and methods of the Force - and found her calling as one of its most powerful disciples. But as strongly as the Force flowed within Lanoree and her parents, it remained absent in her brother, who grew to despise and shun the Je"daii, and whose training in its ancient ways ended in tragedy.  Now, from her solitary life as a Ranger keeping order across the galaxy, Lanoree has been summoned by the Je"daii Council on a matter of utmost urgency. The leader of a fanatical cult, obsessed with traveling beyond the reaches of known space, is bent on opening a cosmic gateway using dreaded dark matter as the key - risking a cataclysmic reaction that will consume the entire star system. But more shocking to Lanoree than even the prospect of total galactic annihilation, is the decision of her Je"daii Masters to task her with the mission of preventing it. Until a staggering revelation makes clear why she was chosen: The brilliant, dangerous madman she must track down and stop at any cost is the brother whose death she has long grieved - and whose life she must now fear.' 
-- );