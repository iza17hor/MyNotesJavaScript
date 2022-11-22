let add;
let note_panel;
let popUpSave;
let cancel;
let category;
let popUpText;
let newNot;
let note_area;
let delete_note;
let note;
let buttonRemoveAll;
let note_title;


const main = () => {
    mainEl()
    buttonEl()
}

const mainEl = () => {
    add = document.querySelector(".add")
    note_panel = document.querySelector(".note-panel")
    popUpSave = document.querySelector(".save")
    cancel = document.querySelector(".cancel")
    category = document.querySelector("#category")
    popUpText = document.querySelector('#text')
    note_area = document.querySelector('.note-area')
    buttonRemoveAll = document.querySelector('.delete-all')
    note = document.querySelectorAll('.note')
    delete_note = document.querySelectorAll('.delete-note')
    note_title = document.querySelector('.note-title')
    
}

const buttonEl = () => {
    add.addEventListener('click', openPopUp)
    cancel.addEventListener('click', closePopUp)
    popUpSave.addEventListener('click', addNotat)
    note_area.addEventListener('click', removeNot)
    buttonRemoveAll.addEventListener("click", removeAllEl)  
}

const addNotat = () => {
    
    newNot = document.createElement('div')
    newNot.classList.add('note')
    note_area.append(newNot)
    detailsNot()
    closePopUp()

}

const detailsNot = () => {
    console.log(note_area.children.length)
    let num = note_area.children.length++
    const note_header = document.createElement('div')
    newNot.append(note_header)
    note_header.classList.add('note-header')
    const h3 = document.createElement('h3')
    h3.classList.add('note-title')
    note_header.append(h3)
    h3.textContent = `Notatka #${num} `;

    const button = document.createElement('button')
    button.classList.add('delete-note')
    
    button.innerHTML = '<i class="fas fa-times icon"></i>'
    note_header.append(button)

    const div2 = document.createElement("div")
    div2.classList.add('note-body')

    newNot.append(div2)
    div2.textContent = popUpText.value

}

const removeNot = (e) => {
    console.log(e.target.closest('.note'))
    let = elToRemove = e.target.closest('.note')
    elToRemove.remove()

    
}


const removeAllEl = () => {
console.log(note_area.children.length)

   for(let i = 0; note_area.children.length > i ; note_area.children.length--){
        note_area.children[i].closest('.note').remove() 
    }
}

const openPopUp = () => {
    note_panel.style.display = "block"
}

const closePopUp = () => {
    note_panel.style.display = "none"
}


document.addEventListener("DOMContentLoaded", main)