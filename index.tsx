import React, { Component } from 'react';
import { render } from 'react-dom';
import Button , {ButtonValid} from './Button/Button';
import {
  mdiCancel,
} from '@mdi/js'

import './style.scss'

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
      <Button icon={mdiCancel} label={"cancel"}/>
      <ButtonValid />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
