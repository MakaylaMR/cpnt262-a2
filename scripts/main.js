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
    credit: 'Nathan Strome',
    creditLink: '<a href="https://www.instagram.com/evolution_jk/>Nathan Strome</a>',
    alt:'jeeps'
  }
];

// let output = '<section>\n';
// jeeps.forEach(function(jeep){
//   output += `

//   <img class="image" src="${jeep.pathURL}" alt="Jeep Pictures">
//   <aside class="aside height">${jeep.height}</aside>
//   <h1 class="title">${jeep.title}</h1>
//   <h2 class="credit">${jeep.credit}</h2>
//   <aside class="aside width">${jeep.width}</aside>
//   <h2 class="link"><a href="${jeep.creditLink}">Instagram</a></h2>
//   <p class="description">${jeep.description}</p>`;
  
// });

// output += '</section>';

// document.querySelector('section').innerHTML = output;

const container = document.querySelector('section');

jeeps.forEach( function(jeep){

  // a figure element is created and nested within the container
  
    const figure = document.createElement('figure');
    container.appendChild(figure);
  
  // a title element is created and nested within a figure element
  
    const title = document.createElement('h2');
    title.innerHTML = jeep.title;
    figure.appendChild(title);
  
  // a img element is created, its src, alt, width, and height are set and then it is nested within an anchor element
  
    const img = document.createElement('img')
    img.src = jeep.pathURL;
    img.alt = jeep.description;
    img.width = jeep.width;
    img.height = jeep.height;
    figure.appendChild(img);
  
  // a figcaption element is created, its inner text is set, and it is nested within a figure element
  
  
    const figCaption = document.createElement('figcaption')
    figCaption.innerHTML = `${jeep.description} Photo by `;
    figure.appendChild(figCaption);
  
  // an anchor element is created for the credit link and nested within a figcaption
  
    const creditLink = document.createElement('a');
    creditLink.href = jeep.creditURL;
    creditLink.innerHTML = jeep.credit;
    figCaption.appendChild(creditLink);
  });