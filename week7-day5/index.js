const mainArr = []
const authors = ['Jose Capablanca', 'Richard Reti', 'Aron Nimzowitsch', 'Alexander Kotov', 'Emanuel Lasker']
const quotes = [
    'A book cannot by itself teach how to play. It can only serve as a guide, and the rest must be learned by experience',
    'In chess, we get a fighting game which is purely intellectual and excludes chance. Indeed, this is what draws some of us to chess',
    'Never play to win a pawn while your development is yet unfinished',
    'Only a severe self-critical outlook will help a player to assess his strong and weak points and so further the process of improving his play',
    'Look for a better one'
]
const generated = [];
const div = document.getElementsByName('main')[0];
const generatedQuote = document.createElement('h2');
let randomIndex = 0;
const likeButton = document.getElementsByName('likebutton')[0];


for(let i = 0; i<authors.length; i++){
    mainArr[i] = {
        id:mainArr.length,
        author:authors[i],
        quote: quotes[i],
        likes: 0
    }
}

function generateQuote(){
    randomIndex = Math.floor(Math.random() * (authors.length));
    if(!generated.includes(randomIndex)){
    generatedQuote.innerText = `
        ${authors[randomIndex]}: "${quotes[randomIndex]}
    `
    generated.push(randomIndex);
    div.appendChild(generatedQuote);
    } 
}

function inputAuthor(e){
    e.preventDefault();
    console.log(e.target.value)
    authors.push(e.target.value)
}

function inputQuote(e){
    e.preventDefault();
    console.log(e.target.value)
    quotes.push(e.target.value)
}

function addQuote(e){
    e.preventDefault();
    mainArr.push(
        {
            id: mainArr.length,
            author: authors[authors.length - 1],
            quote: quotes[quotes.length -1],
            likes: 0
        }
    )
    console.log(mainArr);
}

function withSpaces(){
    console.log(quotes[randomIndex].length);
}

function withoutSpaces(){
    words = quotes[randomIndex].replaceAll(' ', '');
    console.log(words.length);
}

function numberOfWords(){
    words = quotes[randomIndex].split(' ');
    console.log(words.length);
}

function addLike(e){
    e.preventDefault();
    index = quotes.indexOf(quotes[randomIndex]);
    mainArr[index].likes++;
    // showLikes = document.createElement('h3');
    // showLikes.innerText = mainArr[index].likes;
    // likeButton.nextElementSibling = showLikes;
    console.log(mainArr[index].likes);
    
}

