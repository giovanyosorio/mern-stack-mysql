
-- Create database
CREATE TABLE tasks(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    done BOOLEAN NOT NULL DEFAULT false,
    createAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
)