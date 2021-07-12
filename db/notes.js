const fs = require("fs");
const util = require("util");


class Notes{
constructor(){
    this.lastId = 0;
}

read() {
    return readFileAsync("db/db.json","utf8");
}
write(note){
    return writeFileAsync("db/db.json", JSON.stringify(note));
}
getNotes(){
    return this.read().then(notes => {
        let parsedNotes;
        catch(err){
            parsedNotes = [];
            try{ 
                parsedNotes = [].concat(JSON.parse(notes));
            }
            catch(err){
                parsedNotes = [];
            }
        };
        return parsedNotes;
    });
}
}

addNote(){
    const{title, text} = note;
    if(!title || !text){
        Error("Title and text cant be blank");
    }
    const newNote = {title, text, id: ++this.lastId}
    return this.getNotes()
            .then(notes => [...notes, newNote])
            .then(updateNotes => this.write(updateNotes))
            .then(() => newNote)
}

module.exports = new Notes();
