import React, { Component } from 'react';
import ListProfile from './list-profile';
import FormProfile from './form-profile';

class ProfileSecurity extends Component{
  state = {
    toggle: true
  }
  render(){
    const { toggle } = this.state; 
    return(
      <section>
        {
          toggle ?
          <ListProfile />
          :
          <FormProfile />
        }        
      </section>
    )
  }
}

export default ProfileSecurity;