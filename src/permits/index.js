import React, { Component } from 'react';
import FormPermit from './form-permit';
import ListPermit from './list-permit';

class Permits extends Component {
  render(){
    console.log(this.props.match.params.idModule);
    return(
      <section>
        <FormPermit />
        <ListPermit />
      </section>
    )
  }
}

export default Permits;