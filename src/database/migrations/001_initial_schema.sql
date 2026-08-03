-- =====================================================
-- Users
-- =====================================================

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,

    name VARCHAR(255) NOT NULL,

    email VARCHAR(255)
        UNIQUE
        NOT NULL,

    created_at TIMESTAMP
        DEFAULT CURRENT_TIMESTAMP
);

-- =====================================================
-- Projects
-- =====================================================

CREATE TABLE IF NOT EXISTS projects (

    id SERIAL PRIMARY KEY,

    title VARCHAR(255)
        NOT NULL,

    description TEXT,

    owner_id INTEGER
        NOT NULL,

    created_at TIMESTAMP
        DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_projects_owner
        FOREIGN KEY (owner_id)
        REFERENCES users(id)
        ON DELETE CASCADE
);