import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

class HomeApp extends Component{
  render(){
    return(
      <div>
        Home: Test of Material UI for React
        <Button>
          Entry to menu
        </Button>
        <Button variant="contained" color="primary">
          <span>
            <Icon>edit_icon</Icon>
            Primary
          </span>
        </Button>

        <Button variant="fab" color="secondary" aria-label="edit">
          <Icon>edit_icon</Icon>
        </Button>

        <Icon>menu</Icon>
      </div>
    )
  }
}

export default HomeApp;
