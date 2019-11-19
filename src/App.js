import React from 'react';
import './App.css';
// import routes from './routes'
import Header from './Components/Header/Header'
import Archives from './Components/Archives/Archives'
import Home from './Components/Home/Home'
import Search from './Components/Search/Search'

function App() {
  return (
    <div className="App">
      <Header />
      <Archives />
      <Home />
      <Search />
      {/* {routes}       */}
    </div>
  );
}

export default App;