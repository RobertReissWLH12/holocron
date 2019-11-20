SELECT archives.* FROM archives
JOIN user_favorites ON (user_favorites.arhives_id = archives.archives_id)
WHERE user_favorites.favorite_id = $1