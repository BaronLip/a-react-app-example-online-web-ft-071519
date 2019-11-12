//imports below are importing from the node-modules file.
import React, { Component } from 'react';
import moment from 'moment';
// However ExampleComponent & TestComponent are being imported from the files, in this directory, called ExampleComponent.js and TestComponent.js.
import ExampleComponent from './ExampleComponent'
import TestComponent from './TestComponent'

// Add your code own within the return statement

class App extends Component {
  render() {

    return (
      <div className="App">
        <header className="App-header">
            Now
        </header>
        <p className="App-intro">
          In React apps, we write JSX - it looks like HTML, and uses a lot of HTML syntax.
          JSX lets us include JavaScript functions right along with the HTML, and also
          allows us to add in components, which are separate, self-contained chunks of JSX.
        </p>
        ExampleComponent below refers to the ExampleComponent file content of ExampleComponent.js 
        <ExampleComponent />
        <ExampleComponent />
        <TestComponent />

      </div>
    );
  }
}

export default App;
