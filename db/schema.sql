BEGIN;

DROP TABLE IF EXISTS bio;

CREATE TABLE bio (
  user_id SERIAL,
  self_summary VARCHAR,
  good_at VARCHAR,
  message_me VARCHAR
);

COMMIT;







