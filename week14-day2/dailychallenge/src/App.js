import './App.css';
import FormComponent from './FormComponent.js'
import React from 'react';



class App extends React.Component {
  constructor() {
    super();
  }

  handleSubmit = e => {
    e.preventDefault();
    
  }

  render(){
    return (
    <div className="Form">
      <FormComponent />
    </div>
  );
  }
}

export default App;
