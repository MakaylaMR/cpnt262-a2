'use strict'
//array of image objects
const jeeps = [
  {
    id: 1,
    title: 'Two Jeeps',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ex accusamus laborum repellat ratione, rerum alias reiciendis dolorem culpa quas tempore laudantium eveniet at obcaecati.',
    width: 1024,
    imgURL:'assets/images/couple-jeeps-medium.jpg', 
    credit: 'Nathan Strome',
    alt: 'Two Jeeps'
  },
  {
    id: 2,
    title: 'Jeep TJ',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ex accusamus laborum repellat ratione, rerum alias reiciendis dolorem culpa quas tempore laudantium eveniet at obcaecati.',
    width: 1024,
    imgURL:'assets/images/jeep-background-medium.jpg',
    credit: 'Nathan Strome',
    alt: 'Two Jeeps'
  },
  {
    id: 3,
    title: 'Jeep TJ profile',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ex accusamus laborum repellat ratione, rerum alias reiciendis dolorem culpa quas tempore laudantium eveniet at obcaecati.',
    width: 1024,
    imgURL:'assets/images/jeep-profile-makayla-medium.jpg',
    credit: 'Nathan Strome',
    alt: 'jeeps'
  },
  {
    id: 4,
    title: 'Jeep JK profile',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ex accusamus laborum repellat ratione, rerum alias reiciendis dolorem culpa quas tempore laudantium eveniet at obcaecati.',
    width: 1024,
    imgURL:'assets/images/jeep-profile-nathan-medium.jpg',
    credit: 'Nathan Strome',
    alt: 'jeeps'
  },
  {
    id: 5,
    title: 'Jeep JK in BC',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ex accusamus laborum repellat ratione, rerum alias reiciendis dolorem culpa quas tempore laudantium eveniet at obcaecati.',
    width: 1024,
    imgURL:'assets/images/jeepjk-bctrip-medium.jpg',
    credit: 'Nathan Strome',
    alt:'jeeps in bc'
  },
  {
    id: 6,
    title: 'Two Jeeps airing down',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ex accusamus laborum repellat ratione, rerum alias reiciendis dolorem culpa quas tempore laudantium eveniet at obcaecati.',
    width: 1024,
    imgURL:'assets/images/jeepjk-jeeptj-airdown-medium.jpg',
    credit: 'Nathan Strome',
    alt:'jeeps'
  },
  {
    id: 7,
    title: 'Jeep TJ airing down',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ex accusamus laborum repellat ratione, rerum alias reiciendis dolorem culpa quas tempore laudantium eveniet at obcaecati.',
    width: 1024,
    imgURL:'assets/images/jeeptj-airdown-medium.jpg',
    credit: 'Nathan Strome',
    alt:'jeeps'
  },
  {
    id: 8,
    title: 'Jeep TJ going down a hill',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ex accusamus laborum repellat ratione, rerum alias reiciendis dolorem culpa quas tempore laudantium eveniet at obcaecati.',
    width: 1024,
    imgURL:'assets/images/jeeptj-hole-medium.jpg',
    credit: 'Nathan Strome',
    alt:'jeeps'
  },
  {
    id: 9,
    title: 'Jeep TJ side profile',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ex accusamus laborum repellat ratione, rerum alias reiciendis dolorem culpa quas tempore laudantium eveniet at obcaecati.',
    width: 1024,
    imgURL:'assets/images/jeeptj-sideprofile-medium.jpg',
    credit: 'Nathan Strome',
    alt:'jeeps'
  }
];

//loop function
function toDisplay() {
  //loop equation
  for (let i = 0; i < jeeps.length; i++){
    //assigning loop to variables
   let image = `${jeeps[i].imgURL}`;
  let title = `${jeeps[i].title}`;
  let description = `${jeeps[i].description}`;
  let credit = `${jeeps[i].credit}`;
  let alt = `${jeeps[i].alt}`;
  let width = `${jeeps[i].width}`; 
  //return the variables
  return {
    image,
    title,
    description,
    credit,
    alt,
    width
    }
  }
} 

//assigning the function to a variable, to use dot notation it must be attached to a variable

//To display to HTML
let display = toDisplay();

document.querySelector('img').setAttribute('src', display.image);
document.querySelector('h2').innerHTML = display.title;
document.querySelector('h3').innerHTML = display.credit
document.querySelector('figcaption').innerHTML = display.description;

//to go through the images
function previous() {
  let past = `${jeeps[i]}`
}
