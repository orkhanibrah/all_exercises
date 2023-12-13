import {useState} from 'react';
import quotes from "./Quotes";
import colorList from './Colors';

const list = JSON.parse(JSON.stringify(quotes));


const Project = () => {
    const [index, setIndex] = useState(Math.floor(Math.random() * list.length));
    const [colorIndex, setColorIndex] = useState(Math.floor(Math.random() * colorList.length))

    const changeQuote = () => {
        setIndex(Math.floor(Math.random() * list.length));
        setColorIndex(Math.floor(Math.random() * colorList.length))
    }

    return (
        <div style={{backgroundColor:colorList[colorIndex]}}>
           
                <h1>{list[index].quote}</h1>
                <p>-{list[index].author}-</p>
                <button onClick={changeQuote}>New quote</button>
            
        </div>
    )
}

export default Project;