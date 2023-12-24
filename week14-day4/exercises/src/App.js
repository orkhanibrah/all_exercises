import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import ErrorBoundary from './Errors';
import PostList from './PostList';


const HomeScreen = () => {
  return (
    <header>
      <h3>Home</h3>
    </header>

  )
}

const ProfileScreen = () => {
  return (

    <header>
      <h3>Profile Screen</h3>
    </header>

  )
}

const ShopScreen = () => {
  throw new Error('Shop screen has an error')
}



function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="App">
          <NavLink to = '/'>Home</NavLink><br></br>
          <NavLink to = '/profile'>Profile</NavLink><br></br>
          <NavLink to = '/shop'>Shop</NavLink><hr></hr>
          <Routes>
            <Route path = '/' element={<ErrorBoundary><HomeScreen /></ErrorBoundary>}></Route>
            <Route path = '/profile' element = {<ErrorBoundary><ProfileScreen /></ErrorBoundary>}></Route>
            <Route path = '/shop' element = {
              <ErrorBoundary><ShopScreen /></ErrorBoundary>
            }></Route>
          </Routes>
          
        </div>
      </BrowserRouter>
      <PostList />
    </div>
  );
}

export default App;
