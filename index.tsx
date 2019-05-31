import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Buttons from './Buttons';

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
      <Buttons mode='around'>
        <Hello name={this.state.name1} />
        <Hello name={this.state.name2} />
      </Buttons>
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
