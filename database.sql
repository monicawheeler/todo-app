CREATE TABLE categories (
	id SERIAL PRIMARY KEY,
	description VARCHAR(100) NOT NULL
);

CREATE TABLE tasks (
	id SERIAL PRIMARY KEY,
	description VARCHAR(255) NOT NULL,
	complete BOOLEAN NOT NULL DEFAULT 'No',
	date_created DATE,
	category_id INT REFERENCES "categories" DEFAULT "1"
);

-- Sample dataset
INSERT INTO categories (description) 
VALUES ('Low Priority'), ('Medium Priority'), ('High Priority');

INSERT INTO tasks (description, category_id) 
VALUES ('Get hair cut', 1), ('Shop for new shoes', 1), ('Complete todo application', 2), ('Start koala application', 2), ('Wash the dishes', 3), ('Do laundry', 3);