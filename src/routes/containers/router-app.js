import React, { Component } from 'react';
import './router-app.css';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import RouterList from '../components/router-list';
import MenuLink from '../../common/menu/menu-link';
import MenuTop from '../../common/menu/menu-top';
import Footer from '../../common/footer/footer';

class RouterApp extends Component {
  render(){
    return(
      <Router>
        <div className="RouterList-container" style={ {height:'100vh'} }>
          <div id="wrapper" className="toggled">
            <div id="sidebar-wrapper">
                <MenuLink/>
            </div>
            <div id="page-content-wrapper">
              <MenuTop/>
              <RouterList/>
              <Footer/>
            </div>
          </div>
        </div>
    </Router>
    )
  }
}
export default RouterApp;