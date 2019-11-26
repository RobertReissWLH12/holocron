import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import { HashRouter } from 'react-router-dom'
import Routes from './Routes'
import { Provider } from 'react-redux'
import store from './ducks/store'



function App() {
  console.log(window.location.hash)
  return (
    <Provider store={store}>
      <HashRouter>
        <div className="App">
          {/* <Header /> */}
          <Routes/>
        </div>
      </HashRouter>
    </Provider>
  );
}

export default App;