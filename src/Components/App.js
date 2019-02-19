import React, { Component } from 'react';
import Counter from './Counter';
import StepSelector from './stepSelector';

class App extends Component {
  render() {
    return (
      <div>
        <Counter/>
        <StepSelector/>
      </div>
    );
  }
}

export default App;