import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import ButtonCbp , {ButtonValid} from './ButtonCbp';

import './style.css';

interface AppProps { }
interface AppState {
  name1: string;
  name2: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name1: 'React',
      name2: 'TypeScript'
    };
  }

  render() {
    return (
      <div>
      <ButtonValid />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
