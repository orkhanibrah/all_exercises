// Exercise 1
let xml = new XMLHttpRequest();

xml.open('GET', 'https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My');

xml.send();

xml.onload = () => {
    let response = (JSON.parse(xml.response))
    console.log(response);
}

// Exercise 2
let search = 'sun';
let newXml = new XMLHttpRequest();

newXml.open('GET', `https://api.giphy.com/v1/gifs/search?q=${search}&rating=g&limit=10&offset=2&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`);

newXml.send();

newXml.onload = () => {
    let sunGifs = (JSON.parse(newXml.response));
    console.log(sunGifs);
}
