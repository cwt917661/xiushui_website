CREATE USER '{user_name}'@'%' IDENTIFIED WITH caching_sha2_password BY '{user_password}';
GRANT ALL PRIVILEGES ON {user_name}.* TO '{user_name}'@'%';