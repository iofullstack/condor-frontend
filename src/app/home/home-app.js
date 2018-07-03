import React, { Component } from 'react';
import styles from './home-app-styles';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import FastFoodIcon from '@material-ui/icons/FastFood';
import Divider from '@material-ui/core/Divider';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class HomeApp extends Component{
  render(){
    const { classes } = this.props;
    return(
      <div className="container-fluid">
        <h1>Home: Test of Material UI for React</h1>
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
        <h1>Cards</h1>
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <Card className={classes.card}>
                <a href="#goto" className={classes.linker}></a>
                <CardContent>
                  <Typography className={classes.title} color="textSecondary">
                    Ventas
                  </Typography>
                  <Divider/>
                  
                  <FastFoodIcon className={classes.icon}/>
                  <Typography className={classes.description} component="p">
                    Realizar una venta o pedido, designar una mesa.
                  </Typography>
                </CardContent>
              </Card>

              <Card className={classes.card}>
                <a href="#goto" className={classes.linker}></a>
                <CardContent>
                  <Typography className={classes.title} color="textSecondary">
                    Ventas
                  </Typography>
                  <Divider/>
                  
                  <FastFoodIcon className={classes.icon}/>
                  <Typography className={classes.description} component="p">
                    Realizar una venta o pedido, designar una mesa.
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div className="col-md-6 col-md-offset-3">
              <Card className={classes.card}>
                <a href="#goto" className={classes.linker}></a>
                <CardContent>
                  <Typography className={classes.title} color="textSecondary">
                    Ventas
                  </Typography>
                  <Divider/>
                  
                  <FastFoodIcon className={classes.icon}/>
                  <Typography className={classes.description} component="p">
                    Realizar una venta o pedido, designar una mesa.
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </div>
      </div>
    )
  }
}

export default withStyles(styles)(HomeApp);
