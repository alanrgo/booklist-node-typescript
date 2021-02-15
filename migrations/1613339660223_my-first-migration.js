const e = require("express");

exports.up = (pgm) => {
    pgm.createTable('books', {
      id: 'id',
      title: { type: 'varchar(1000)', notNull: true },
      createdAt: {
        type: 'timestamp',
        notNull: true,
        default: pgm.func('current_timestamp'),
      },
    })
  }

exports.down = (pgm) => {
    pgm.dropTable('books')
}