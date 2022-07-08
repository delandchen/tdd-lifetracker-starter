CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    password TEXT NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    username TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE CHECK (POSITION('@' IN email) > 1),
    createdAt timestamp NOT NULL DEFAULT CURRENT_DATE,
    updatedAt timestamp NOT NULL DEFAULT NOW()
);

CREATE TABLE nutrition (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    calories INTEGER NOT NULL,
    image_url TEXT NOT NULL,
    createdAt timestamp NOT NULL DEFAULT CURRENT_DATE,
    user_id INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
)
