import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { formStyle } from './style';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import ShortTextIcon from '@material-ui/icons/ShortText';
import Banner from '../common/banner';

const FormModule = (props)=>{

  const { classes, datos, handleChange } = props;

  console.log('datos ingresados: ', datos);

  return(
    <Grid 
      container
      justify='center'
      >
      <Grid item xs={12} sm={8} md={8} lg={6} xl={6} className={ classes.form }>
        <Banner
          title="Nuevo Módulo del Sistema"
          src="/assets/images/banner/banner-module.png"
        />
        <aside className={ classes.formContent }>
          <Grid 
            container
            justify="center"
          >
            <Grid item xs={12}>
              <FormControl className={classes.formControl}>
                  <InputLabel
                    FormLabelClasses={{
                      root: classes.cssLabel,
                      focused: classes.cssFocused,
                    }}
                    htmlFor="name"
                  >
                    Nombre del Módulo
                  </InputLabel>
                  <Input
                    className={ classes.input }
                    startAdornment={
                      <InputAdornment position="start">
                        <ShortTextIcon className={ classes.icon }/>
                      </InputAdornment>
                    }
                    id="name"
                    autoComplete="off"
                  />
              </FormControl>
            </Grid>
          </Grid>

          <Grid 
            container
            justify="flex-end"
          >
            <Grid item xs={12} className = { classes.btnForm }>
              <Button variant="contained" color="primary" className={classes.button}>
                Crear
              </Button>
            </Grid>  
          </Grid>
        </aside>
      </Grid>
    </Grid>
  );
}
export default withStyles(formStyle)(FormModule);