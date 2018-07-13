import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { formStyle } from './style';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Switch from '@material-ui/core/Switch';

import ShortTextIcon from '@material-ui/icons/ShortText';

const FormProfile = (props)=>{

  const { classes, datos, handleChange } = props;

  console.log('datos ingresados: ', datos);

  return(
    <Grid 
      container
      justify='center'      
      >
      <Grid item xs={12} sm={8} md={8} lg={6} xl={6} className={ classes.form }>
        <aside>
          <Typography variant="headline" align='center' className={ classes.title }>
            Nuevo Perfil de Seguridad
          </Typography>

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
                    Nombre del Perfil De Seguridad
                  </InputLabel>
                  <Input
                    className={ classes.input }
                    startAdornment={
                      <InputAdornment position="start">
                        <ShortTextIcon className={ classes.icon }/>
                      </InputAdornment>
                    }
                    id="name"
                  />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" align='left' className={ classes.title }>
                Elija los permisos
              </Typography>
            </Grid>
            {
              datos !== null ?

              <Grid item xs={12}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Modulo Usuario</FormLabel>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={ datos.jose }
                          onChange={ handleChange('jose') }
                          value="jose"
                        />
                      }
                      label="Crear Usuario"
                    />
                    <FormControlLabel
                      control={
                        <Switch
                          checked={ datos.gilad }
                          onChange={ handleChange('gilad') }
                          value="gilad"
                        />
                      }
                      label="Editar Usuario"
                    />
                    <FormControlLabel
                      control={
                        <Switch
                          checked={ datos.jason }
                          onChange={ handleChange('jason') }
                          value="jason"
                        />
                      }
                      label="Listar Usuarios"
                    />
                    <FormControlLabel
                      control={
                        <Switch
                          checked={ datos.antoine }
                          onChange={ handleChange('antoine') }
                          value="antoine"
                        />
                      }
                      label="Eliminar Usuario"
                    />
                  </FormGroup>
                  <FormHelperText>Be careful</FormHelperText>
                </FormControl>
              </Grid>
              :
              <Grid item xs={12}>
                Cargando...
              </Grid>
            }
          </Grid>
        </aside>
      </Grid>
    </Grid>
  );
}
export default withStyles(formStyle)(FormProfile);