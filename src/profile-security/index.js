import React, { Component } from 'react';
import ListProfile from './list-profile';
import FormProfile from './form-profile';
import condorModules from './modules.json';

class ProfileSecurity extends Component{
  state = {
    toggle: false,
    jose: true,
    gilad: true,
    jason: false,
    antoine: true,
    condorModules: null,
  }
  handleChange = name => event => {
    console.log(name);
    this.setState({ [name]: event.target.checked });
  };
  componentDidMount(){
    this.setState({ condorModules: condorModules });
  }
  render(){
    const { toggle } = this.state;
    console.log(condorModules);
    return(
      <section>
        {
          toggle ?
          <ListProfile />
          :
          <FormProfile
            datos = { this.state }
            handleChange = { this.handleChange }
          />
        }        
      </section>
    )
  }
}

export default ProfileSecurity;