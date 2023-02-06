const { Schema, model } = require('mongoose')

const recipeSchema = new Schema(
  {},
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
)

const Recipe = model('Recipe', recipeSchema)

module.exports = Recipe
