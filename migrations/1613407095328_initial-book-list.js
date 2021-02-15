/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql(`INSERT INTO books (title) VALUES ('book 1');`)
};

exports.down = pgm => {
    pgm.sql(`DELETE FROM books WHERE title = 'book 1';`)
};
