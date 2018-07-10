import React, { Component } from 'react';
//import { BrowserRouter as Router } from 'react-router-dom';
//import RouterList from '../components/router-list';
//import Menu from '../../common/menu/menu';
import HomeApp from './../../app/home/home-app';

class RouterApp extends Component {
  render(){
    return(
      <div>
        <HomeApp/>
      {/* <Router>
        <Menu>
          <RouterList/>
        </Menu>
      </Router> */}
      </div>
    )
  }
}
export default RouterApp;