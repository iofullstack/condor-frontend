import React, { Component } from 'react';
import RouterApp from './routes/containers/router-app';
import Menu from './common/menu/menu';

class App extends Component {
  render() {
    return (
      <RouterApp>
        <Menu />
      </RouterApp>
    );
  }
}

export default App;
