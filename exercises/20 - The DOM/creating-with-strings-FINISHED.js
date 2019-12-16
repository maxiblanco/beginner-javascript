const item = document.querySelector('.item');

item.innerHTML = `
<ul>
  <li>First</li>
  <li>Second</>
  <li>Fourth</li>
  <li>Third</li>
  <li>Fifth</li>
</ul>
`;

const width = 500;
const src = `https://picsum.photos/${width}`;
const desc = `Cute Pup`;
const myHTML = `
<div class="wrapper">
<h2>Cute Pup</h2>
<img src="${src}" alt="${desc}"/>
</div>
`;

//turn a string into DOM element

const myFragment = document.createRange().createContextualFragment(myHTML);

console.log(myFragment);
