'use strict'
//array of image objects
const jeeps = [
  {
    id: 1,
    title: 'Two Jeeps',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ex accusamus laborum repellat ratione, rerum alias reiciendis dolorem culpa quas tempore laudantium eveniet at obcaecati.',
    width: 1024,
    height: 683,
    pathURL:'assets/images/couple-jeeps-medium.jpg', 
    credit: 'Credit: Nathan Strome',
    creditLink: '<a href="https://www.instagram.com/evolution_jk/',
    alt: 'Two Jeeps'
  },
  {
    id: 2,
    title: 'Jeep TJ',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ex accusamus laborum repellat ratione, rerum alias reiciendis dolorem culpa quas tempore laudantium eveniet at obcaecati.',
    width: 1024,
    height: 683,
    pathURL:'assets/images/jeep-background-medium.jpg',
    credit: 'Credit: Nathan Strome',
    creditLink: '<a href="https://www.instagram.com/evolution_jk/',
    alt: 'Two Jeeps'
  },
  {
    id: 3,
    title: 'Jeep TJ profile',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ex accusamus laborum repellat ratione, rerum alias reiciendis dolorem culpa quas tempore laudantium eveniet at obcaecati.',
    width: 1024,
    height: 683,
    pathURL:'assets/images/jeep-profile-makayla-medium.jpg',
    credit: 'Credit: Nathan Strome',
    creditLink: '<a href="https://www.instagram.com/evolution_jk/',
    alt: 'jeeps'
  },
  {
    id: 4,
    title: 'Jeep JK profile',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ex accusamus laborum repellat ratione, rerum alias reiciendis dolorem culpa quas tempore laudantium eveniet at obcaecati.',
    width: 1024,
    height: 683,
    pathURL:'assets/images/jeep-profile-nathan-medium.jpg',
    credit: 'Credit: Nathan Strome',
    creditLink: '<a href="https://www.instagram.com/evolution_jk/',
    alt: 'jeeps'
  },
  {
    id: 5,
    title: 'Jeep JK in BC',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ex accusamus laborum repellat ratione, rerum alias reiciendis dolorem culpa quas tempore laudantium eveniet at obcaecati.',
    width: 1024,
    height: 683,
    pathURL:'assets/images/jeepjk-bctrip-medium.jpg',
    credit: 'Credit: Nathan Strome',
    creditLink: '<a href="https://www.instagram.com/evolution_jk/',
    alt:'jeeps in bc'
  },
  {
    id: 6,
    title: 'Two Jeeps airing down',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ex accusamus laborum repellat ratione, rerum alias reiciendis dolorem culpa quas tempore laudantium eveniet at obcaecati.',
    width: 1024,
    height: 683,
    pathURL:'assets/images/jeepjk-jeeptj-airdown-medium.jpg',
    credit: 'Credit: Nathan Strome',
    creditLink: '<a href="https://www.instagram.com/evolution_jk/',
    alt:'jeeps'
  },
  {
    id: 7,
    title: 'Jeep TJ airing down',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ex accusamus laborum repellat ratione, rerum alias reiciendis dolorem culpa quas tempore laudantium eveniet at obcaecati.',
    width: 1024,
    height: 683,
    pathURL:'assets/images/jeeptj-airdown-medium.jpg',
    credit: 'Credit: Nathan Strome',
    creditLink: '<a href="https://www.instagram.com/evolution_jk/',
    alt:'jeeps'
  },
  {
    id: 8,
    title: 'Jeep TJ going down a hill',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ex accusamus laborum repellat ratione, rerum alias reiciendis dolorem culpa quas tempore laudantium eveniet at obcaecati.',
    width: 1024,
    height: 682,
    pathURL:'assets/images/jeeptj-hole-medium.jpg',
    credit: 'Credit: Nathan Strome',
    creditLink: '<a href="https://www.instagram.com/evolution_jk/',
    alt:'jeeps'
  },
  {
    id: 9,
    title: 'Jeep TJ side profile',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ex accusamus laborum repellat ratione, rerum alias reiciendis dolorem culpa quas tempore laudantium eveniet at obcaecati.',
    width: 1024,
    height: 683,
    pathURL:'assets/images/jeeptj-sideprofile-medium.jpg',
    credit: 'Credit: Nathan Strome',
    creditLink: '<a href="https://www.instagram.com/evolution_jk/',
    alt:'jeeps'
  }
];
//decided to create two different outputs for my css grid vision, this had to include two different sections
//left section -- includes: images, height and width
let output = '<section>\n';
jeeps.forEach(function(sectionRight){
  output += `

  <aside>${sectionRight.height}</aside>
  <img src="${sectionRight.pathURL}" alt="Jeep Pictures">
  <aside>${sectionRight.width}</aside>`;
  
});

output += '</section>';
  
document.querySelector('.width-height-image').innerHTML = output;


//right section -- includes: title,credit and description
let output2 = '<section>\n';

jeeps.forEach(function(sectionLeft){
  output2 += `
  
  <h1>${sectionLeft.title}</h1>
  <h2>${sectionLeft.credit}</h2>
  <h2><a href="${sectionLeft.creditLink}">Instagram</a></h2>
  <p>${sectionLeft.description}</p>`;
  
});

output2 += '</section>';
  
document.querySelector('.title-credit-desc').innerHTML = output2;


