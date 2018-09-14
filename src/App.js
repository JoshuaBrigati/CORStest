import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount() {
    axios({
      method: 'POST',
      url: 'http://localhost:8088/v2',
      data: {
          "jsonrpc": "2.0",
          "id": 0,
          "method": "heights"
        }
    }).then((response) => {
      console.log(response.data)
    })
  }



  render() {
    $('.nav-item.dropdown').hover(function() {
      let hasShow = $('.dropdown-menu').hasClass('show')
      
      if (!hasShow) {
        $('.dropdown-menu').addClass('show');
      } else if (hasShow) {
        $('.dropdown-menu').removeClass('show');
      }
    });

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">This is gonna do some sweet stuff</h1>
        </header>
        <div className="row">
          <div className="column">
            <ul className="nav nav-pills">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="true">Dropdown</a>
                <div className="dropdown-menu" x-placement="bottom-start" style={{position: 'absolute', willChange: 'transform', top: '0px', left: '0px', transform: 'translate3d(0px, 38px, 0px)'}}>
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Separated link</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
