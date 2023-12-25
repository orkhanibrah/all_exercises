import React from 'react';
import './App.css';


// const toDos = ['Buy some milk', 'Do my homework'];



class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos : ['Buy some milk', 
      'Do my homework']
  }}

  handleSubmit = (e) => {
    e.preventDefault();
    let input = e.target.todo.value;
    this.setState({todos: [...this.state.todos, input ]})
    e.target.todo.value = '';
    console.log(this.state.todos)
  }

  handleClick = (e) => {
    let index = e.target.id;
    let newToDos = [...this.state.todos]
    newToDos.splice(index, 1)
    this.setState({todos: newToDos})
  }

  handleMouseHover = (e) => {
    e.target.className = 'MouseOver'
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1 style={{color : 'blue'}}>Todo's</h1>
        </header>
        <div>
          {this.state.todos.map(item => {
            return (<div 
              id = {this.state.todos.indexOf(item)}
              className = 'Todo'
              onClick={this.handleClick}
              >
                {item}
              </div>)
          })}
        </div>
        <form onSubmit={this.handleSubmit}>
          <p>Add a new todo:</p>
          <input name='todo'/>
          
        </form>
      </div>
    );
}}

export default App;
