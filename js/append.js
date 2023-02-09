// Where to add 
const foodContainer = document.getElementById('furits-list');
// console.log(foodContainer)

// what to be added 
const li = document.createElement('li');
li.innerText = 'Orange';

// append Child 
foodContainer.appendChild(li)

// creat a section 
// where to add 
const mainSection = document.getElementById('main-section');

// what to be added 
const creatSection = document.createElement('section')
creatSection.innerHTML =`
<h1> My Hobby</h1>
<ul>
    <li>Gardaing</li>
    <li>Codding</li>
    <li>Gamming</li>
</ul>
`

mainSection.appendChild(creatSection);