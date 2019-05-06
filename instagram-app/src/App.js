import React from 'react';
import './App.css';
import dummyData from './components/dummy-data';
import PostContainer from './components/PostContainer/PostContainer';

function App() {
  return (
    <div className="App">
      <PostContainer />
      <dummyData />
    </div>
  );
}

export default App;
