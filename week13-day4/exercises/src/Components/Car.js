import React, {useState} from 'react';
import Garage from './Garage';

const size = {size:'small'}

const Car = (props) => {
    const [color, setColor] = useState('black');
    return (
        <header>
            This car is a {color} {props.model}<br/>
            {Garage(size)}
        </header>
    )
}

export default Car;