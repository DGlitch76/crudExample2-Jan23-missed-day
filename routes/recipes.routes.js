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

router.get('/new', async (req, res, next) => {
  res.render('recipes/new')
})

router.post('/new', async (req, res) => {
  const body = req.body
  console.log(body)
  const newRecipe = await Recipe.create({ ...body, ingredients: body.ingredients.split(' ') })

  res.redirect('/recipes')
})

module.exports = router
