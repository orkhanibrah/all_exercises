let allBoldItems = '';

const strong = document.querySelectorAll('strong');
getBoldItems = () => {
    for(x of strong){
        allBoldItems += ` ${x.innerText}`;
    }
    console.log(allBoldItems);
}
getBoldItems();

highlight = () => {
    strong.forEach(item => {
        item.style = 'color:blue';
    })
}


function returnItemsToDefault(){
    strong.forEach(item => {
        item.style = 'color:black';
    })
};


const p = document.querySelector('p');
p.addEventListener('mouseover', () => {
    highlight();
});
p.addEventListener('mouseout', () => {
    returnItemsToDefault();
})
