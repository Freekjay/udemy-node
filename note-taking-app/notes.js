const fs = require('fs')
const chalk = require('chalk')

const readNote = (title) => {
    const note = loadNotes().find((note) => note.title === title)
    if(note){
        console.log(chalk.blue(`${note.title}:`))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse(`Note not found!`));
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log('Your notes')
    notes.forEach((note) => console.log(note.title))
}

const addNote = (title, body) => {
    const notes = loadNotes()
    // const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)

    //debugger doesn't stop the debug in chrome anymore due to changes in the debugger
    //solution https://github.com/ChromeDevTools/devtools-protocol/issues/85
    //start debugger: node inspect app.js add --title='Inspect test' --body='list 123'  
    //to start debugger again: restart

    debugger

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('Note has been added!'));
    } else {
        console.log(chalk.red.inverse('Note already exists!'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title )

    if (notesToKeep.length !== notes.length) {
        saveNotes(notesToKeep)
        console.log(chalk.green.inverse(`Note ${title} has been deleted`));
    } else {
        console.log(chalk.red.inverse(`Note ${title} not found`));
    }
}

const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJson)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    } catch (e) {
        return []
    }

}

module.exports = {
    readNote: readNote,
    listNotes: listNotes,
    addNote: addNote,
    removeNote: removeNote
}