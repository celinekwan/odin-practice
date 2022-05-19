const container = document.querySelector("#container"); 

const content = document.createElement('div'); 
content.classList.add(".content");
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

// ex. 1
const para = document.createElement('p');
para.textContent = "Hey I'm red!"; 
para.style.color = 'red';

container.appendChild(para);

// ex. 2
const h3 = document.createElement('h3');
h3.style.color = 'blue';
h3.textContent = "I'm a blue h3!";

container.appendChild(h3); 

// ex. 3
const div = document.createElement('div'); 
div.style.backgroundColor = 'pink';

const h1 = document.createElement('h1'); 
h1.textContent = "I'm in a div"; 

const p = document.createElement('p'); 
p.textContent = 'ME TOO!'; 

div.appendChild(h1); 
div.appendChild(p); 

// div.style.borderWidth = "10px";
// div.style.borderColor = "black"; 

container.appendChild(div);