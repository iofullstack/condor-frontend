import React, { Component } from 'react';
import styles from './home-app-styles';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import FastFoodIcon from '@material-ui/icons/FastFood';
import Divider from '@material-ui/core/Divider';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';

class HomeApp extends Component{
  render(){
    const { classes } = this.props;
    return(
      <div className={classes.container}>
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

        <div style={{ flexGrow: 1}}>
          <Grid item xs={12}>
            <Grid 
              container 
              spacing={24} 
              justify="center" 
              alignItems="center"
              direction="row"
              >
              
              <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                <Card className={classes.card}>
                  <a href='#' className={classes.linker}></a>
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
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
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
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
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
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
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
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(HomeApp);
