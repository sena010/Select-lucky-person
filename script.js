
const studentsArray = [
    { no: 1, name: 'james', surname: 'wigger' },
    { no: 2, name: 'Valeria', surname: 'wercy' },
    { no: 3, name: 'Mathilda', surname: 'Casper' },
    { no: 4, name: 'Mercy', surname: 'park' },
    { no: 5, name: 'Tsubasa', surname: 'edison' },
    { no: 6, name: 'Naruto', surname: 'belhorto' },
    { no: 7, name: 'Sasuke', surname: 'Vardy' },
    { no: 8, name: 'Eren', surname: 'nilcoln' },
    { no: 9, name: 'Annie', surname: 'weccit' },
    { no: 10, name: 'Maria', surname: 'shelby' }
]


const orderedList = document.getElementById('students')

studentsArray.forEach((item, i) => {
    orderedList.innerHTML += `<li id="${i}">${item.name}${' '}${item.surname}</li>`
})
let randomCreator = null
function chooseItem() {
    if (randomCreator !== null) {
        let person = document.getElementById(`${randomCreator}`)
        person.classList.remove('marked')
    }
    randomCreator = Math.floor(Math.random() * 10)
    console.log(randomCreator)
    let person = document.getElementById(`${randomCreator}`)
    person.classList.add('marked')
}
