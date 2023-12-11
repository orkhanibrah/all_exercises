import React from 'react';
import './Exercise.css';


class Exercise extends React.Component {
    render(){
        const style_header = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial"
          };
          
        return (
            <div>
                <h1 style = {{color:'red', backgroundColor:'lightblue'}}>Exercise 3</h1>
                <h1 style={style_header}>props styling</h1>
                <p className='para'>An example paragraph</p>
                <form>
                    <h3>This is a form</h3>
                    Enter your name:<br />
                    <input></input>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Exercise;