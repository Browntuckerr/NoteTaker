const router = require("express").Router();
const{
    filterByQuery,
    findById,
    createElement,
} = require("../db/notes.js");

router.get("/notes", (req, res) => {
   notes.getNotes()
   .then(notes => res.status(500).json(err));
});

router.post("/notes", (req, res) => {
    notes.addNotes(req.body)
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err));
});

module.exports = router;