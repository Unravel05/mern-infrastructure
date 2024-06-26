const Note = require('../../models/note')

module.exports = {
    index,
    create
}

async function create(req, res) {
    try {
        req.body.user = req.user
        const note = await Note.create(req.body)
        res.json(note)
    } catch (err) {
        res.status(400).json(err)
    }
}

async function index(req, res) {
    try {
        const notes = await Note.find({})
        res.json(notes)
    } catch (err) {
        res.status(404).json(err)
    }
}