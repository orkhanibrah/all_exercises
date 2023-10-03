const h2 = document.querySelector('h2');

h2.addEventListener('click', () => {
    h2.style.color = 'red'
})

h2.addEventListener('mouseover', () => {
    h2.style.fontSize = '50px'
})

h2.addEventListener('mouseout', (e) => {
    e.target.style.backgroundColor = 'grey';  
})

h2.addEventListener('dblclick', () => {
    h2.style.color = 'blue';
})