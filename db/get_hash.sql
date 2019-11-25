SELECT * FROM users h
JOIN users_hash hh ON h.user_id = hh.user_id
WHERE username = $1;