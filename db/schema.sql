-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

CREATE TABLE category (
    id INTEGER NOT NULL AUTO_INCREMENT,
    category_name VARCHAR (30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE product (
    id INTEGER NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(30) NOT NULL,
    price DECIMAL NOT NULL,
    stock INTEGER NOT NULL DEFAULT 10,
    category_id INTEGER,
    FOREIGN KEY (category_id) REFERENCES category(id) on DELETE CASCADE,
    PRIMARY KEY (id)
);

CREATE TABLE tag (
    id INTEGER NOT NULL AUTO_INCREMENT,
    tag_name VARCHAR (30),
    PRIMARY KEY (id)
);

CREATE TABLE ProductTag (
    id INTEGER NOT NULL AUTO_INCREMENT,
    product_id INT,
    FOREIGN KEY (product_id) REFERENCES product(id) on DELETE CASCADE,
    tag_id INT,
    FOREIGN KEY (tag_id) REFERENCES tag(id) on DELETE CASCADE,
    PRIMARY KEY (id)
);