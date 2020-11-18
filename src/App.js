import React, { Component } from 'react';
import './App.css';

import SuperSecret from './components/SuperSecret'
import OnOffButton from './components/OnOffButton'
import AccordianMenu from './components/AccordianMenu'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SuperSecret isAuthenticated={true}/>
        <OnOffButton />
        <AccordianMenu title="Aloha!" >
          <p> this p tag is the "props.children" for the AccordianMenu component </p>
        </AccordianMenu>
      </div>
    );
  }
}

export default App;