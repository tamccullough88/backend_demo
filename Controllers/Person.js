const Person = require("../Models/Person")

async function getAllPeople(req, res) {
    try {
        const people = await Person.find()
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'error getting all people' })
    }
}

module.exports = {
    getAllPeople
}