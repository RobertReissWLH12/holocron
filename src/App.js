import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import {HashRouter} from 'react-router-dom'
import routes from './routes'
// import {Provider} from 'react-redux'
// import store from './ducks/store'



function App() {
  return (
    <HashRouter>
    <div className="App">
      <Header />
      {routes}      
    </div>
    </HashRouter>
  );
}

export default App;