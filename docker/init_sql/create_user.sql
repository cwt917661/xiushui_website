CREATE USER '{user_name}'@'%' IDENTIFIED WITH caching_sha2_password BY '{password}';
GRANT ALL PRIVILEGES ON {schema_name}.* TO '{user_name}'@'%';
