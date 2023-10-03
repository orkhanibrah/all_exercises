const gifs = document.getElementById('gifs');

getGif = e => {
    e.preventDefault();
    let input = document.forms[0].elements[0];

    let xml = new XMLHttpRequest();
    xml.open('GET', `https://api.giphy.com/v1/gifs/random?tag=${input.value}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`);
    xml.send();

    xml.onload = () => {
        let gif = (JSON.parse(xml.response));
        let gifCard = `
        <div>
            <img src=${gif.data.images.downsized.url}/>
            <button onClick='deleteGif(event)'>DELETE</button>
        </div>
        `
        
        const newGif = document.createElement('div');
        newGif.innerHTML = gifCard;
        gifs.appendChild(newGif);
        input.value = '';
    }
}

deleteGif = (e) => {
    e.target.previousElementSibling.remove();
    e.target.remove();
}

deleteAll = e => {
    e.target.parentElement.remove();
}
