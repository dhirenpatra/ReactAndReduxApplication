import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import './bootstrap.css';
import Wrapper from './components/Wrapper'
import configureStore from './redux/configureStore';
import { Provider as ReduxProvider } from 'react-redux';

const store= configureStore();

function App() {
  return (
    <div className="App">
      <ReduxProvider store={store}>
        <Router>
          <Wrapper />
        </Router>
      </ReduxProvider>
    </div>
  );
}

export default App;
