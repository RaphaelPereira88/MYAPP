import React from 'react'
import './App.css'
import Mainpage from './Mainpage'

import {Route} from 'react-router-dom'
import Search from './Search'


class App extends React.Component {
  state = {
    books:[]
  }


  render() {
    return (
      <div className="app">
        <Route path ='/search' render ={() =>(
          <Search 
             books = {this.state.books}
          />
        )} />
        <Route exact path ='/' render ={() =>(
          <Mainpage component = { Mainpage}/>
        )} />
      </div>
    )
  }
}

export default App
