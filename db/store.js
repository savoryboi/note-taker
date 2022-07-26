const uuidv1 = require('uuidv1');
const util = require('util');
const fs = require('fs');
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
    read() {
        return readFileAsync('db/db.json','utf8')
    }
    write(note) {
        
        return writeFileAsync('db/db.json', 'utf8')
    }
    getNotes() {
        let parsedNotes;
        try {
            parsedNotes=[].concat(JSON.parse(notes))
        } catch(err){
            parsedNotes =[]
        }
        return parsedNotes;
    }
    addNote(note) {
        const { title, text } = note;
        const newNote = {title, text, id:uuidv1()};
        return this.getNotes()
            .then((note) => [...notes, newNote])
            .then((updatedNotes) => this.write(updatedNotes))
            .then(() => newNote);
    }


    removeNote(id) {
        return this.getNotes()
            .then((notes)=>notes.filter((note)=> note.id != id))
            .then((filteredNotes)=> this.write(filteredNotes));
    }

}

module.exports = new Store();