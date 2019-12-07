SELECT * FROM archives
WHERE title LIKE '%'||$1||'%';