-- Runs once, the first time the database volume is created.
CREATE TABLE IF NOT EXISTS public.messages (
    id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name       VARCHAR(128) NOT NULL,
    email      TEXT NOT NULL,
    message    TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);