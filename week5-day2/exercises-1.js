// Exercise 1
const h1 = document.querySelector('h1');
console.log(h1);

const article = document.querySelector('article');
article.lastElementChild.remove();

const h2 = article.children[1];
h2.addEventListener('click', () => {
    h2.style = 'background-color:red';
});

const h3 = h2.nextElementSibling;
h3.addEventListener('click', () => {
    h3.style = 'display:none';
});

const paragraphs = document.querySelectorAll('p');
const button = document.createElement('button');
button.innerText = 'Make bold';
button.addEventListener('click', () => {
    paragraphs.forEach(item => {
        item.style.fontWeight = 'bold';
    })
})
article.appendChild(button);

h1.addEventListener('mouseover', () => {
    h1.style.fontWeight = Math.floor(Math.random() * 100);
});


