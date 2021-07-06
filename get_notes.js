const client = require('./client')
client.list({}, (error, notes) => {
    if (!error) {
        console.log('successfully fetch List notes')
        console.log(notes)
    } else {
        console.error(error)
    }
})

let newNote = {
    title: "New Note",
    content: "New Note content"
}
client.insert(newNote, (error, note) => {
    if (!error) {
       console.log('New Note created successfully', note)
    } else {
       console.error(error)
    }
})