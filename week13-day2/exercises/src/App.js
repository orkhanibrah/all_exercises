import logo from './logo.svg';
import './App.css';
import UserFavoriteAnimals from './UserFavoriteAnimals';
import Exercise from './exercise3';

const myelement = <h1>I love JSX!</h1>;
const sum = 5 + 5;
const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals : ['Horse','Turtle','Elephant','Monkey']
};

function App() {
  return (
    <div>
      <Exercise />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>Hello World!</p>
          {myelement}
          <p>
            React is {sum} times better with JSX
          </p>
          <h3>{user.firstName}</h3>
          <h3>{user.lastName}</h3>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      <UserFavoriteAnimals />
    </div>
  );
}

export default App;
