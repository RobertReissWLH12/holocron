import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Components/Home/Home'
import Donate from './Components/Donate/Donate'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Search from './Components/Search/Search'
import Archives from './Components/Archives/Archives'
import Hideout from './Components/Hideout/Hideout'
import Contracts from './Components/Hideout/Contracts/Contracts'
import Guests from './Components/Hideout/Guests/Guests'
import Quiz from './Components/Hideout/Quiz/Quiz'
import Treasures from './Components/Hideout/Treasures/Treasures'
// import Greensock from './Components/Search/Greensock/Greensock'

export default function Routes() {
    return ( 
    <div>
      {/* <Header />   */}
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/donate' component={Donate} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/search' component={Search} />
        <Route path='/archives' component={Archives} />
        <Route path='/hideout' component={Hideout} />
        <Route path='/contracts' component={Contracts} />
        <Route path='/guests' component={Guests} />
        <Route path='/quiz' component={Quiz} />
        <Route path='/treasures' component={Treasures} />
        {/* <Route path='/greensock' component={Greensock} /> */}
    </Switch>
    </div>
)}