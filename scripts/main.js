'use strict'

const jeeps = [
  {
    id: 1,
    title: 'Two Jeeps',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ex accusamus laborum repellat ratione, rerum alias reiciendis dolorem culpa quas tempore laudantium eveniet at obcaecati.',
    width: 1680,
    imgURL:'assets/images/couple-jeeps.jpg', 
    credit: 'Nathan Strome',
    alt: 'Two Jeeps'
  },
  {
    id: 2,
    title: 'Jeep TJ',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ex accusamus laborum repellat ratione, rerum alias reiciendis dolorem culpa quas tempore laudantium eveniet at obcaecati.',
    width: 1680,
    imgURL:'assets/images/jeep-background.jpg',
    credit: 'Nathan Strome',
    alt: 'Two Jeeps'
  },
  {
    id: 3,
    title: 'Jeep TJ profile',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ex accusamus laborum repellat ratione, rerum alias reiciendis dolorem culpa quas tempore laudantium eveniet at obcaecati.',
    width: 1680,
    imgURL:'assets/images/jeep-profile-makayla.jpg',
    credit: 'Nathan Strome',
    alt: 'jeeps'
  },
  {
    id: 4,
    title: 'Jeep JK profile',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ex accusamus laborum repellat ratione, rerum alias reiciendis dolorem culpa quas tempore laudantium eveniet at obcaecati.',
    width: 1000,
    imgURL:'assets/images/jeep-profile-nathan.jpg',
    credit: 'Nathan Strome',
    alt: 'jeeps'
  },
  {
    id: 5,
    title: 'Jeep JK in BC',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ex accusamus laborum repellat ratione, rerum alias reiciendis dolorem culpa quas tempore laudantium eveniet at obcaecati.',
    width: 1680,
    imgURL:'assets/images/jeepjk-bctrip.jpg',
    credit: 'Nathan Strome',
    alt:'jeeps in bc'
  },
  {
    id: 6,
    title: 'Two Jeeps airing down',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ex accusamus laborum repellat ratione, rerum alias reiciendis dolorem culpa quas tempore laudantium eveniet at obcaecati.',
    width: 1680,
    imgURL:'assets/images/jeepjk-jeeptj-airdown.jpg',
    credit: 'Nathan Strome',
    alt:'jeeps'
  },
  {
    id: 7,
    title: 'Jeep TJ airing down',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ex accusamus laborum repellat ratione, rerum alias reiciendis dolorem culpa quas tempore laudantium eveniet at obcaecati.',
    width: 1680,
    imgURL:'assets/images/jeeptj-airdown.jpg',
    credit: 'Nathan Strome',
    alt:'jeeps'
  },
  {
    id: 8,
    title: 'Jeep TJ going down a hill',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ex accusamus laborum repellat ratione, rerum alias reiciendis dolorem culpa quas tempore laudantium eveniet at obcaecati.',
    width: 2048,
    imgURL:'assets/images/jeeptj-hole.jpg',
    credit: 'Nathan Strome',
    alt:'jeeps'
  },
  {
    id: 9,
    title: 'Jeep TJ side profile',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ex accusamus laborum repellat ratione, rerum alias reiciendis dolorem culpa quas tempore laudantium eveniet at obcaecati.',
    width: 1620,
    imgURL:'assets/images/jeeptj-sideprofile.jpg',
    credit: 'Nathan Strome',
    alt:'jeeps'
  }
];

function toDisplay() {
  let random = Math.floor(Math.random() * jeeps.length)
  let image = `${jeeps[random].imgURL}`;
  let title = `${jeeps[random].title}`;
  let description = `${jeeps[random].description}`;
  let credit = `${jeeps[random].credit}`
  let alt = `${jeeps[random].alt}`;

  return {
    image,
    title,
    description,
    alt,
    credit
  }
}

let display = toDisplay();

document.querySelector('img').setAttribute('src', display.image);
document.querySelector('h2').innerHTML = display.title;
document.querySelector('h3').innerHTML = display.credit
document.querySelector('figcaption').innerHTML = display.description;
