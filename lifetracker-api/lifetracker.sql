\echo 'Delete and recreate lifetracker database?'
\prompt 'Return yes or Ctrl-C to cancel' answer

DROP DATABASE lifetracker;
CREATE DATABASE lifetracker;
\connect lifetracker;

\i lifetracker-schema.sql