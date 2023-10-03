let words = prompt('Please enter some words separated by commas');

function createArray(){
    const wordsArray = words.split(', ');
    return wordsArray;
}

    function longestString(){
        let longest = '';
        let wordsArray = createArray();
        for(x of wordsArray){
            if(x.length >= longest.length){
                longest = x;
            }
        }
        return longest.length;
}

    function createStars(){
        let wordsArray = createArray();
        let longest = longestString();
       
        
        for(x of wordsArray){
            emptySpace = longest - x.length;
            emptyString = ' '.repeat(emptySpace);
            // console.log(emptyString);
            console.log(`* ${x}` + emptyString + ' *' + '\n');
            }
        }

    function addStarLines(){
        let longest = longestString();
        let starLines = '*'.repeat(longest + 4)
        
        console.log(starLines);
        createStars();
        console.log(starLines);
    }


addStarLines();


