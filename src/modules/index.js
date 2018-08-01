import React, { Component } from 'react';
import ListModules from './list-modules';
import FormModule from './form-module';

class ProfileSecurity extends Component{
  state = {
    toggle: false,
  }
  render(){
    const { toggle } = this.state;
    return(
      <section>
        {
          toggle ?
          <ListModules />
          :
          <FormModule
            datos = { this.state }
            handleChange = { this.handleChange }
          />
        }        
      </section>
    )
  }
}

export default ProfileSecurity;