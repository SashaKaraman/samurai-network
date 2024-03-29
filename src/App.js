import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import { Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'



const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path="/profile" component={Profile} />
          <Route path="/dialogs" component={Dialogs} />
        </div>
      </div>
    </BrowserRouter>)
}

export default App
