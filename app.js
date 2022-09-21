// Vanilla JavaScript DOM Challenges //

// BEGINNER CHALLENGES //

// 1. Create a div (don’t put it in the DOM yet).
const customDivElement = document.createElement('div')

// 2. Add a class of "boxy" to that div.
customDivElement.classList.add('boxy')

// 3. Add two paragraphs of text to that div with the text of your choosing.
const paraOne = document.createElement('p')
const textNodeOne = document.createTextNode('This is the first paragraph')
paraOne.appendChild(textNodeOne)

const paraTwo = document.createElement('p')
const textNodeTwo = document.createTextNode('This is the second paragraph')
paraTwo.appendChild(textNodeTwo)

customDivElement.appendChild(paraOne)
customDivElement.appendChild(paraTwo)

// 4. Insert the div into the DOM just after the h1.
const heading = document.querySelector('main').children[0]
heading.insertAdjacentElement('afterend', customDivElement)

// 5. Add a third paragraph to the div after it’s in the DOM.
const paraThree = document.createElement('p')
const textNodeThree = document.createTextNode('This is the third paragraph')
paraThree.appendChild(textNodeThree)

customDivElement.appendChild(paraThree)

/**
 * document.createElement()
 * document.createTextNode()
 * [someElement].appendChild()
 * [parentElement].children[0]
 * [someElement].insertAdjacentElement([dynamicVal], actualElement)
 *  - dynamicVal = beforebegin, afterbegin, beforeend, afterend
 */

// BEGINNER+ CHALLENGES //

// 1. Add an unordered sublist to the last list item with three children ("one", "two", and "three").
const unOrderedList = document.createElement('ul')

const listOne = document.createElement('li')
const listTwo = document.createElement('li')
const listThree = document.createElement('li')

listOne.appendChild(document.createTextNode('one'))
listTwo.appendChild(document.createTextNode('two'))
listThree.appendChild(document.createTextNode('three'))

unOrderedList.appendChild(listOne)
unOrderedList.appendChild(listTwo)
unOrderedList.appendChild(listThree)

const thirdListItem = document.querySelector('.list').children[2]
thirdListItem.appendChild(unOrderedList)

// 2. Add a paragraph after the list of items with a class of "glow."
const glowPara = document.createElement('p')
glowPara.appendChild(document.createTextNode('This is the glow para we all have been waiting for!'))
glowPara.classList.add('glow')
document.querySelector('.list').insertAdjacentElement('afterend', glowPara)

// 3. Remove a card when its button is clicked.
// const cards = document.querySelectorAll('.card-container > .card')
// cards.forEach(el => {
// 	el.addEventListener('click', function (evt) {
// 		if (evt.target.classList.contains('btn')) {
// 			evt.currentTarget.remove()
// 		}
// 	})
// })

// 4. [Ignore: Change the event listener to the following] Toggle the class "glow" to the image when you click the card’s button.
// const cardElements = document.querySelectorAll('.card-container > .card')
// cardElements.forEach(el => {
// 	el.addEventListener('click', function (evt) {
// 		evt.currentTarget.children[0].classList.toggle('glow')
// 	})
// })

// 5. Change the event listener to the following. Change the title of all other cards to "Jealous 👀" when you click on a card’s button. (BONUS: Change the title of the card that was clicked to "I’m the greatest!")
// const cardElementsContainer = document.querySelector('.card-container')
// const cardElements = document.querySelectorAll('.card-container > .card')

// cardElementsContainer.addEventListener('click', function (evt) {
// 	const currentCard = evt.target.closest('.card')
// 	currentCard.querySelector('.card__heading').textContent = 'I’m the greatest!'
// 	cardElements.forEach(el => {
// 		if (el !== currentCard) {
// 			el.querySelector('.card__heading').textContent = 'Jealous 👀'
// 		}
// 	})
// })

//INTERMEDIATE CHALLENGES//

// 1. Append a button below the card-container that says "Add more cards" (it should have the class "btn").
const cardContainer = document.querySelector('.card-container')

const addCardBtn = document.createElement('button')
addCardBtn.appendChild(document.createTextNode('Add Cards'))
addCardBtn.classList.add('btn')

cardContainer.insertAdjacentElement('afterend', addCardBtn)

// 2. Create a function that generates a new card when clicked (you can copy current HTML code) and places it as the last card in the card container (BONUS: Set the query parameter of the image and the id of the image to its card number). Also the new card when created should get new Title and new Description

addCardBtn.addEventListener('click', evt => {
	let cardElementsLength = document.querySelectorAll('.card-container > .card').length

	/* setting class and id to the new li tag */
	let newCard = document.createElement('li')
	newCard.classList.add('card')
	let elementIdText = `card-${cardElementsLength + 1}`
	newCard.setAttribute('id', elementIdText)

	let cardTitle = prompt('Enter Card Title')
	let cardDesc = prompt('Enter Card Description')

	let cardContent = `
  <img class="card__image" width="300" height="300" src="https://picsum.photos/300/?random=${cardElementsLength + 1}" alt="Lorem Ipsum Picture">
  <h2 class="card__heading">${cardTitle}</h2>
  <p class="card__description">${cardDesc}</p>
  <button class="btn card__btn">Learn More</button>
`

	newCard.innerHTML = cardContent

	cardContainer.appendChild(newCard)
})

// 4. Removes a card from the DOM only when a card image is clicked. (BONUS: Make it work on new cards added to the DOM.)

const cards = document.querySelectorAll('.card-container > .card')
cards.forEach(el => {
	el.addEventListener('click', function (evt) {
		if (evt.target.classList.contains('card__image')) {
			evt.currentTarget.remove()
		}
	})
})

// 5. Create and insert a button that says "Change Color Scheme" (ensure the button has a class of 'btn') that changes the css variable --_hue to a random number between 0 and 360 when clicked.

/**
 * Getting CSS Variables - getComputedStyle(document.documentElement).getPropertyValue('--_hue')
 */
document.querySelector('.change-theme').addEventListener('click', function () {
	document.documentElement.style.setProperty('--_hue', Math.ceil(Math.random() * 360))
})
