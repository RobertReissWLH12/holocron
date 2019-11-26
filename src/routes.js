import React from 'react'
import { Switch, Route } from 'react-router-dom'
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
import Header from './Components/Header/Header'

export default function Routes() {
  return (
    
      <Switch>
        <Route exact path='/' component={() => {return(
            <>
              <Header />
              <Home />
            </>
      )   }}
           />
        <Route path='/donate' component={() => (
          <>
            <Header />
            <Donate />
          </>
        )} />
        <Route path='/login' component={() => (
          <>
            <Header />
            <Login />
          </>
        )} />
        <Route path='/register' component={() => (
          <>
            <Header />
            <Register />
          </>
        )} />
        <Route path='/search' component={() => (
          <>
            <Header />
            <Search />
          </>
        )} />
        <Route path='/archives' component={() => (
          <>
            <Header />
            <Archives />
          </>
        )} />
        <Route path='/hideout' component={() => (
          <>
            <Header />
            <Hideout />
          </>
        )} />
        <Route path='/contracts' component={() => (
          <>
            <Header />
            <Contracts />
          </>
        )} />
        <Route path='/guests' component={() => (
          <>
            <Header />
            <Guests />
          </>
        )} />
        <Route path='/quiz' component={() => (
          <>
            <Header />
            <Quiz />
          </>
        )} />
        <Route path='/treasures' component={() => (
          <>
            <Header />
            <Treasures />
          </>
        )} />
      </Switch>
    
  )
}