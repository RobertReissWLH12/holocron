import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import { HashRouter } from 'react-router-dom'
import routes from './routes'
import { Provider } from 'react-redux'
import store from './ducks/store'



function App() {
  return (
    <Provider>
      <HashRouter>
        <div className="App">
          <Header />
          {routes}
        </div>
      </HashRouter>
    </Provider>
  );
}

export default App;