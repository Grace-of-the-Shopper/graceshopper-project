const router = require('express').Router()
const {Candy} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const candy = await Candy.findAll()
    res.json(candy)
  } catch (err) {
    next(err)
  }
})

router.get('/:candyId', async (req, res, next) => {
  try {
    const candy = await Candy.findByPk(req.params.candyId)
    res.json(candy)
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const test = await Candy.destroy({
      where: {
        id: req.params.id
      }
    })
    console.log(test)
    if (test > 0) {
      res.sendStatus(200)
    } else {
      res.sendStatus(500)
    }
  } catch (err) {
    next(err)
  }
})
