import * as React from 'react';
import './App.css';
import * as Component from './components';
import { MyProvider } from './context';
import { Page } from './pages/Page';
import { MySecondProvider } from './second-context';

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
          <MySecondProvider value={{ name: 'Mellow' }}>
            <Page />
          </MySecondProvider>
        </MyProvider>
      </div>
    );
  }
}

export default App;
