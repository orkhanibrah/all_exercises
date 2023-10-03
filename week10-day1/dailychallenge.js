// Challenge 1
let makeAllCaps = arr => {
    return new Promise((res, rej) => {
        if(arr.every(item => typeof item == 'string')){
            res(arr.map(item => item.toUpperCase()));
        } else {
            rej('Not all are strings');
        }
    })
}

let sortWords = array => {
    return new Promise((res, rej) => {
        if(array.length > 4){
            res(array.sort());
        } else {
            rej('The array is not long enough')
        }
    })
}

//in this example, the catch method is executed
makeAllCaps([1, "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//in this example, the catch method is executed
makeAllCaps(["apple", "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//in this example, you should see in the console, 
// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
      .catch(error => console.log(error))


// CHALLENGE 2
const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`

let toJs = () => {
    return new Promise((res, rej) => {
        const morseObj = (JSON.parse(morse));
        if(morseObj.length == 0){
            rej('Object is empty');
        } else {
            res(morseObj);
        }
    })
}

let toMorse = morseJS => {
    return new Promise((res, rej) => {
        let input = prompt('Enter a word or a sentence');
        let inputArr = input.toLowerCase().replaceAll(' ', '').split('');
        if (inputArr.every(item => Object.keys(morseJS).includes(item))){
            let resultArr = []
            for(x of inputArr){
                resultArr.push(morseJS[x])
            }
            res(resultArr)
    } else {
        rej('Unrecognized character')
    }
    })
}

let joinWords = morseTranslation => {
    const body = document.querySelector('body');
    const translation = document.createElement('h3');
    translation.innerHTML = `${morseTranslation.join('<br>')}`;
    body.appendChild(translation);
}

toJs()
.then(value => toMorse(value))
.then(value => joinWords(value));



