-- Write your Schema Here -- 
DROP DATABASE IF EXISTS shop_db;
CREATE DATABASE shop_db;

USE shop_db;

CREATE TABLE customers(
  id INT auto_increment PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL
);

CREATE TABLE customers_orders(
  id INT auto_increment PRIMARY KEY,
  customer_id INT NOT NULL,
  border_details VARCHAR(30) NOT NULL,
  FOREIGN KEY (customers) REFERENCES customers(id)
);


SELECT * FROM customers LEFT JOIN customers_orders
