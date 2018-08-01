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

const FormPermit = (props)=>{

  const { classes, datos, handleChange } = props;

  console.log('datos ingresados: ', datos);

  return(
    <Grid 
      container
      justify='center'
      >
      <Grid item xs={12} sm={8} md={10} lg={8} xl={8} className={ classes.form }>
        <Banner
        title="Agregar Permiso"
          src="/assets/images/banner/banner-permits.png"
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
                    htmlFor="action"
                  >
                    Action of the permit
                  </InputLabel>
                  <Input
                    className={ classes.input }
                    startAdornment={
                      <InputAdornment position="start">
                        <ShortTextIcon className={ classes.icon }/>
                      </InputAdornment>
                    }
                    id="action"
                    autoComplete="off"
                    placeholder="Ej: INSERT_USER"
                  />
              </FormControl>
            </Grid>
            
            <Grid item xs={12}>
              <FormControl className={classes.formControl}>
                  <InputLabel
                    FormLabelClasses={{
                      root: classes.cssLabel,
                      focused: classes.cssFocused,
                    }}
                    htmlFor="action"
                  >
                    Description for the Action
                  </InputLabel>
                  <Input
                    className={ classes.input }
                    startAdornment={
                      <InputAdornment position="start">
                        <ShortTextIcon className={ classes.icon }/>
                      </InputAdornment>
                    }
                    id="action"
                    autoComplete="off"
                    placeholder="Ej: Inserta Usuario"
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
                Agregar
              </Button>
            </Grid>  
          </Grid>
        </aside>
      </Grid>
    </Grid>
  );
}
export default withStyles(formStyle)(FormPermit);