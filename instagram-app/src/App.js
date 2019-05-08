import React, {Component} from 'react';
import './App.css';
import PostPage from './components/PostContainer/PostPage';
import Login from './components/Login/Login';
import Authentication from './components/Authentication/Authentication';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <ComponentFromAuthentication />
      </div>
    );
  }
}

const ComponentFromAuthentication = Authentication(PostPage)(Login);

export default App;
