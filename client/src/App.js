import React, { Component } from 'react';
import Routes from './Routes';
import Nav from './components/Nav';


export class App extends Component {

  render() {
    return(
      <div> 
        <Nav />
        <Routes />
      </div>
    )
  }
}

export default App

