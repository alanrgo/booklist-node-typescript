/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.addColumns('books', {
        description: { type: 'varchar(1000)', notNull: false },
    }, {default: 'no description set...'})
};

exports.down = pgm => {
    pgm.dropColumns('books', ['description'])
};
