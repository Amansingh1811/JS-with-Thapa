const addButton = document.querySelector('#add')

// save data into a localStorage
const updateLSData = () =>{
    const textAreaData = document.querySelectorAll('textArea')
    const notes = [];
    console.log(textAreaData);
    textAreaData.forEach((note) =>{
        return notes.push(note.value)
    })
    localStorage.setItem('notes',JSON.stringify(notes))
}

const addNewNote = (text = '') =>{
    const note = document.createElement('div')
    note.classList.add('note')
    const htmlData = `
    <div class="operation">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>
    `
    note.insertAdjacentHTML('afterbegin', htmlData)

// take the References of edit, delete
const editButton = note.querySelector('.edit')
const deleteButton = note.querySelector('.delete')
const mainButton = note.querySelector('.main')
const textArea = note.querySelector('textarea')

// then add some Event

deleteButton.addEventListener('click', () =>{
    note.remove()
    updateLSData();
})
editButton.addEventListener('click', () =>{
    mainButton.classList.toggle('hidden')
    textArea.classList.toggle('hidden')
})
textArea.value = text
mainButton.innerHTML = text
textArea.addEventListener('change', (Event) =>{
    const value = Event.target.value
    mainButton.innerHTML = value

    updateLSData();
})
document.body.appendChild(note)
}
// getting data back from localStorage
const notes = JSON.parse(localStorage.getItem('notes'));
if(notes){notes.forEach((note) =>addNewNote(note))}

addButton.addEventListener('click', () => addNewNote())
