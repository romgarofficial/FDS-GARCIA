SHOW DATABASES;

CREATE DATABASE UA_ESHOP;

DROP DATABASE UA_ESHOP;

#Selelect a db
USE UA_ESHOP;

CREATE TABLE users(
	user_id INT,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    password VARCHAR(50),
    email VARCHAR(100),
    date_registered DATE
);

SHOW TABLES;

DESCRIBE TABLE users;

CREATE TABLE prod(
	product_id INT,
    product_name VARCHAR(100)
);

#Renaming a table
ALTER TABLE prod RENAME TO products;

#Add new column
ALTER TABLE products 
ADD COLUMN description VARCHAR(200),
ADD COLUMN price DECIMAL(10, 2),
ADD COLUMN stocks INT,
ADD COLUMN date_added DATE;

ALTER TABLE products 
ADD COLUMN test VARCHAR(200);

DESC products;

#Renaming a table column
ALTER TABLE products 
RENAME COLUMN test TO brand;

#Modifying Table Column
ALTER TABLE products
MODIFY COLUMN brand VARCHAR(100);

ALTER TABLE products
MODIFY COLUMN brand INT NOT NULL;

#DELETING A COLUMN
ALTER TABLE products
DROP COLUMN brand;

#Deleting a whole table
DROP TABLE products;

#Deleting the whole DB
DROP DATABASE UA_ESHOP;