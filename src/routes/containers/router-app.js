import React, { Component } from 'react';
import RouterList from '../components/router-list';

class RouterApp extends Component {
  render(){
    return(
      <RouterList>
        { this.props.children }
      </RouterList>
    )
  }
}
export default RouterApp;