import * as React from 'react';
import './App.css';
import * as Component from './components';
import { MyProvider } from './context';
import { Page } from './pages/Page';

const BB = {
  Components: {
    Text: Component.Text
  }
}

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <MyProvider value={BB}>
          <Page/>
        </MyProvider>
      </div>
    );
  }
}

export default App;
