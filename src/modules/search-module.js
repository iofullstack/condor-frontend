import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { formStyle } from './style';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const SearchModule = (props)=>{
  const { classes, datos, handleChange } = props;
  console.log(classes);

 return (
  <Grid
    container
    justity="center"
    alignItems="center"
    >
    <Paper className={ classes.content }>
      <Grid item xs={10} className={ classes.contentCenter }>
        <FormControl className={classes.formControl}>

          <Grid container spacing={8} alignItems="flex-end">
            <Grid item>
              <SearchIcon />
            </Grid>
            <Grid item xs={10}>
              <TextField id="searchModule" label="Buscar Módulo" className={ classes.input }/>
            </Grid>
            <Grid item>
              <Button component={Link} to="modules/add" variant="fab" mini color="primary" className={ classes.btnAdd }>
                <AddIcon/>
              </Button>
            </Grid>
          </Grid>
        </FormControl>
      </Grid>   
    </Paper>
  </Grid>
 )
}

export default withStyles(formStyle)(SearchModule);