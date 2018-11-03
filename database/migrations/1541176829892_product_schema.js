'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table.increments()
      table.string('name', 200)
      table.integer('user_id').unsigned()
      table.text('description', 255)
      table.decimal('price', 20, 2)
      table.timestamps()
      
      table.foreign('user_id').references('id').inTable('users')

    })
  }

  down () {
    this.drop('products')
  }
}

module.exports = ProductSchema
