import {useState} from 'react';

const Events = () => {
    const clickMe = () => {
        alert('I was clicked');
    }

    const handleKeyDown = (e) => {
        if(e.key === 'Enter'){
            const input = e.target.value;
            alert(`The Enter key was pressed, your input is: ${input}`);
        }
    }

    const [isToggleOn, setIsToggleOn] = useState('ON');
    const handleOnClick = () => {
        isToggleOn === 'ON' ? setIsToggleOn('OFF') : setIsToggleOn('ON');
    }


    return (
        <div>
            <button onClick={clickMe}>Click</button><br/>
            <input
            type='text'
            onKeyDown = {handleKeyDown}
            placeholder = 'Press the ENTER key!'
            /><br />
            <button onClick={handleOnClick}>Switch Toggle {isToggleOn}</button>
        </div>
    )
}

export default Events;