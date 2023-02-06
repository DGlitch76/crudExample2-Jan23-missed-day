const express = require('express')
const Recipe = require('../models/Recipe.model')
const router = express.Router()

/* GET all recipes */
router.get('/', async (req, res, next) => {
  try {
    const allRecipes = await Recipe.find()
    console.log('All recipes :', allRecipes)
    res.render('recipes/all', { hopper: allRecipes })
  } catch (error) {
    console.log('Route to all recipes', error)
  }
})

module.exports = router
