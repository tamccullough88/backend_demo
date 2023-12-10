const router = require('express').Router()
const { getAllPeople, getPersonById, createPerson, deletePerson, updatePerson } = require('../Controllers/Person')

router.get('/all', getAllPeople)
router.get('/:id', getPersonById)
router.post('/', createPerson)
router.delete('/:id', deletePerson)
router.patch('/update/:id', updatePerson)



module.exports = router