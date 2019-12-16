const myList = document.createElement('ul');
const myListItem1 = document.createElement('li');
const myListItem2 = document.createElement('li');
const myListItem3 = document.createElement('li');
const myListItem4 = document.createElement('li');
const myListItem5 = document.createElement('li');

myListItem1.textContent = 'fist';
myList.appendChild(myListItem1);
myListItem2.textContent = 'second';
myList.appendChild(myListItem2);
myListItem4.textContent = 'fourth';
myList.appendChild(myListItem4);
myListItem5.textContent = 'fifth';
myList.appendChild(myListItem5);

myListItem3.textContent = 'third';
myListItem4.insertAdjacentElement('beforebegin', myListItem3);

document.body.insertAdjacentElement('beforeend', myList);

const newList = myList.cloneNode(true);
document.body.append(newList);
