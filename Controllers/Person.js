const Person = require("../Models/Person")

//get all people
async function getAllPeople(req, res) {
    try {
        const people = await Person.find()
        res.json(people)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'error getting all people' })
    }
}

//display a person
async function getPersonById(req, res) {
    try {
        const { id } = req.params
        const person = await Person.findById(id)
        res.json(person)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'error getting person' })
    }
}

//create a person
async function createPerson(req, res) {
    try {
        await new Person({ ...req.body }).save()
        res.status(201).json({ message: 'user created' })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'error creating person' })
    }
}

//update a person
async function updatePerson(req, res) {
    try {

        const people = await Person.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(202).json({ message: 'user updated' })
        console.log(people)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'error updating person' })
    }
}

//delete a person
async function deletePerson(req, res) {
    try {
        const { id } = req.params
        const person = await Person.findByIdAndDelete(id)
        res.json(person)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'error deleting person' })
    }
}


//export
module.exports = {
    getAllPeople,
    getPersonById,
    createPerson,
    updatePerson,
    deletePerson

}