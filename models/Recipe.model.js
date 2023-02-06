const { Schema, model } = require('mongoose')

const recipeSchema = new Schema(
  {
    ingredients: {
      type: [String],
      required: true,
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    cookingTime: {
      type: Number,
    },
    difficulty: {
      enum: ['easy', 'medium', 'hard'],
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
)

const Recipe = model('Recipe', recipeSchema)

module.exports = Recipe
