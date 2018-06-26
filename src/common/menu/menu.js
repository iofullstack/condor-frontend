import React, { Component } from 'react';
import './menu.css';
import MenuLink from './menu-link';
import MenuTop from './menu-top';
import Footer from '../footer/footer';

class Menu extends Component {
  constructor(props){
    super(props);
    this.wrapper = React.createRef();
  }
  state = {
    openMenu: true
  }
  toggle = (e)=>{
    e.preventDefault();
    if(this.state.openMenu){
      this.wrapper.current.className = "";
    }else{
      this.wrapper.current.className = "toggled";
    }
    this.setState(prevState=>({
        openMenu: !prevState.openMenu
    }));
  }
  render(){
    return(
      <div className="RouterList-container" style={ {height:'100vh'} }>
        <div ref={ this.wrapper } id="wrapper" className="toggled">
          <div id="sidebar-wrapper">
              <MenuLink/>
          </div>
          <div id="page-content-wrapper">
            <MenuTop
              toggle = { this.toggle }
            />
            
            { this.props.children }
            
            <Footer/>
          </div>
        </div>
      </div>
    )
  }
}
export default Menu;