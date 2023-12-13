import {useState, useEffect} from 'react';

const Color = () => {

    const [favoriteColor, setFavoriteColor] = useState('red');
    useEffect(() => {
        alert('useEffect reached');
    },[favoriteColor])

    const handleClick = () => {
        setFavoriteColor('blue');
    }

    return(
        <header>
            <h2>My favorite color is {favoriteColor}</h2>
            <button onClick={handleClick}>Change favorite color</button>
        </header>
    )
}

export default Color;