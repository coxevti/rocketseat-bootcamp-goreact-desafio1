import React, { Component } from 'react';
import { render } from 'react-dom';

import './style.scss';

class App extends Component {
  render() {
    return 'Desafio 1 - ReactJS';
  }
}

render(<App />, document.getElementById('app'));
