const express = require('express')
const Recipe = require('../models/Recipe.model')
const User = require('../models/User.model')
const router = express.Router()

/* GET all recipes */
router.get('/', async (req, res) => {
  try {
    const allRecipes = await Recipe.find()
    console.log('All recipes :', allRecipes)
    res.render('recipes/all', { hopper: allRecipes })
  } catch (error) {
    console.log('Route to all recipes', error)
  }
})

router.get('/new', async (req, res, next) => {
  res.render('recipes/new', { update: false })
})

router.get('/:recipeId', async (req, res) => {
  const recipeFound = await Recipe.findById(req.params.recipeId).populate('owner')
  console.log({ recipeFound })
  res.render('recipes/one', { recipeFound })
})

router.post('/new', async (req, res) => {
  const body = req.body
  console.log(body)
  await Recipe.create({
    ...body,
    ingredients: body.ingredients.split(' '),
    owner: '63e108a5cfca86248667cacf',
  })

  res.redirect('/recipes')
})

router.get('/:recipeId/update', async (req, res) => {
  const recipe = await Recipe.findById(req.params.recipeId)
  res.render('recipes/new', { recipe, update: true })
})

router.post('/:recipeId/update', async (req, res) => {
  await Recipe.findByIdAndUpdate(req.params.recipeId, {
    ...req.body,
    ingredients: req.body.ingredients.split(' '),
  })

  res.redirect(`/recipes/${req.params.recipeId}`)
})

router.post('/:recipeId/delete', async (req, res) => {
  await Recipe.findByIdAndDelete(req.params.recipeId)

  res.redirect('/recipes')
})

module.exports = router
