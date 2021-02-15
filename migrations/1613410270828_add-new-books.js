/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql(`INSERT INTO books (title, description) VALUES ('book 2', 'book 2 description');`)
    pgm.sql(`INSERT INTO books (title, description) VALUES ('book 3', 'book 3 description');`)
};

exports.down = pgm => {
    pgm.sql(`DELETE FROM books WHERE title = 'book 2';`)
    pgm.sql(`DELETE FROM books WHERE title = 'book 3';`)

};
