CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL
);

CREATE TABLE emi_details (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    emi_amount FLOAT NOT NULL,
    due_date DATE NOT NULL,
    status VARCHAR(50) DEFAULT 'pending'
);
