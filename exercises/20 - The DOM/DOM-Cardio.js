// Make a div

const myDiv = document.createElement('div');

// add a class of wrapper to it

myDiv.classList.add('wrapper');

// put it into the body

document.body.appendChild(myDiv);

// make an unordered list

const list = document.createElement('ul');

// add three list items with the words "one, two three" in them
// put that list into the above wrapper

const listItemOne = document.createElement('li');
listItemOne.textContent = 'one';
const listItemTwo = document.createElement('li');
listItemTwo.textContent = 'two';
const listItemThree = document.createElement('li');
listItemThree.textContent = 'three';
list.appendChild(listItemOne);
list.appendChild(listItemTwo);
list.appendChild(listItemThree);

myDiv.append(list);

// create an image
const image = document.createElement('img');

// set the source to an image
image.scr = 'https://picsum.photos/500';

// set the width to 250
image.width = 250;

// add a class of cute
image.classList.add('cute');
// add an alt of Cute Puppy
image.alt = 'Cute Puppy!';

// Append that image to the wrapper
myDiv.appendChild(image);

// with HTML string, make a div, with two paragraphs inside of it

const newDiv = document.createElement('div');
newDiv.innerHTML = `
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nobis recusandae explicabo, tenetur esse aspernatur. Possimus eligendi reiciendis numquam sunt.</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus aliquam distinctio aliquid assumenda quas sapiente voluptatum cupiditate cum cumque hic.</p>
`;

// put this div before the unordered list from above
myDiv.insertAdjacentElement('afterbegin', newDiv);
// add a class to the second paragraph called warning
const paragraph = document.querySelectorAll('p')[1];
paragraph.classList.add('warning');
// remove the first paragraph
document.querySelector('p').remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

function generatePlayerCard(name, age, height) {
  const card = document.createElement('div');
  card.innerHTML = `
  <div class="playerCard">
    <h2>${name.toUpperCase()} - ${age}</h2>
    <p>They are ${height} and ${age} years old. In Dog years would be ${age *
    7}. That would be a tall dog!</p>
    <button class='delete' type='button'>Remove</button>
  </div>
  `;
  return card;
}

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const lastDiv = document.createElement('div');
lastDiv.classList.add('cards');
// Have that function make 4 cards
const cardOne = generatePlayerCard('Juanito', 8, 170);
const cardTwo = generatePlayerCard('Francis', 23, 196);
const cardThree = generatePlayerCard('Fernando', 80, 140);

// append those cards to the div
lastDiv.appendChild(cardOne);
lastDiv.appendChild(cardTwo);
lastDiv.appendChild(cardThree);
// put the div into the DOM just before the wrapper element
myDiv.insertAdjacentElement('beforebegin', lastDiv);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const buttons = document.querySelectorAll('.delete');
// make out delete function
const deleteEl = (e) => {
  e.target.parentElement.remove();
};
// loop9 over them and attach a listener
buttons.forEach((button) => button.addEventListener('click', deleteEl));
