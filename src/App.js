import React, { Component } from 'react';
import './App.css';
import Toggle from './ToggleComponent/Toggle'

class App extends Component {
  kek(e) {
    console.log(e);
  }
  render() {
    return (
      <div className="App">
        <Toggle
          valueUnchecked="Fonds"
          valueChecked="Documents"
          onChange={this.kek}
        />
      </div>
    );
  }
}

export default App;
