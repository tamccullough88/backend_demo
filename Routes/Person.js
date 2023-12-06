const router = require('express').Router()
const { getAllPeople } = require('../Controllers/Person')

router.get('/all', getAllPeople)

module.exports = router