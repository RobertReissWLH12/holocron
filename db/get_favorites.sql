SELECT * FROM archives
JOIN user_favorites ON (user_favorites.archives_id = archives.archives_id)
WHERE user_id = $1