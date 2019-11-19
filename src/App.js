import React from 'react';
import './App.css';
// import routes from './routes'
import Header from './Components/Header/Header'
// import {HashRouter} from 'react-router-dom'
// import Routes from './routes'
// import {Provider} from 'react-redux'
// import store from './ducks/store'
import Archives from './Components/Archives/Archives'
import Home from './Components/Home/Home'
import Search from './Components/Search/Search'
import Hideout from './Components/Hideout/Hideout'
import Contracts from './Components/Hideout/Contracts/Contracts'
import Guests from './Components/Hideout/Guests/Guests'
import Quiz from './Components/Hideout/Quiz/Quiz'
import Treasures from './Components/Hideout/Treasures/Treasures'
import Donate from './Components/Donate/Donate'
import Login from './Components/Login/Login'

function App() {
  return (
    <div className="App">
      <Header />
      <Donate />
      <Login />
      <Archives />
      <Home />
      <Search />
      <Hideout />
      <Contracts />
      <Guests />
      <Quiz />
      <Treasures />
      {/* {routes}       */}
    </div>
  );
}

export default App;