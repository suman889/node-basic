import express, { json } from 'express';
import { getNotes, getSingleNote, createNote } from './database.js';

const app = express();

app.use(express.json());


// all notes
app.get("/notes", async (req, res) => {
    const notes = await getNotes()
    res.send(notes);
})

// single note
app.get("/notes/:id", async (req, res) => {
    const id = req.params.id
    const note = await getSingleNote(id)
    res.send(note);
})


//POST a note

app.post("/notes", async (req, res) => {
    const {title,contents} =req.body
    const note = await createNote(title, contents)
    res.status(201).send(note);
})






app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(8080, () => {
    console.log('listening on port 8080')
});