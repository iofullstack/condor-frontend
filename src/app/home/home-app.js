import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import MenuIcon from '@material-ui/icons/Menu';

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
            <EditIcon/>
            Primary
          </span>
        </Button>

        <Button variant="fab" color="secondary" aria-label="edit">
          <EditIcon/>
        </Button>

        <MenuIcon/>
      </div>
    )
  }
}

export default HomeApp;
