import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import ButtonCommun , {ButtonValid} from './ButtonCommun';
import {
  mdiCancel,
} from '@mdi/js'

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
      <ButtonCommun icon={mdiCancel}/>
      <ButtonValid />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
