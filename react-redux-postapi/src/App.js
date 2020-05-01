import React from 'react';
import './App.css';

import {Provider} from 'react-redux';
import store from './store/index';

import Post from "./components/Post";
import PostForm from './components/PostForm';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PostForm />
        <hr/>
        <Post />
      </Provider>
    </div>
  );
}

export default App;
