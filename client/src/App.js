import React, { Component } from 'react'
import Nav from './component/Nav';
import axios from 'axios';

export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount(){
    axios({method:'get', url: 'https://jsonplaceholder.typicode.com/posts', responseType: 'json'})
    .then(response => response.data)
    .then(data => this.setState({isLoaded: true, items: data}))
   }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.name}>
              {item.name} {item.price}
            </li>
          ))}
        </ul>
      );
    }
  }
}


export default App

