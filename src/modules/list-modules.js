import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { listStyle } from './style';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import SearchModule from './search-module';
import Banner from '../common/banner';

const ListModules = (props)=>{
  let id = 0;
  function createData(name, calories, fat, carbs, protein) {
    id += 1;
    return { id, name, calories, fat, carbs, protein };
  }
  const data = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

  const { classes } = props;
  return(
    <Grid
      container
      justify="center"
    >
      <Banner
        title="Módulos del Sistema"
        src="/assets/images/banner/banner-module.png"
      />
      <SearchModule/>
      <Grid item xs={12} sm={12} md={10} lg={10} xl={8}>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Nombre del Módulo</TableCell>
                <TableCell>Permisos</TableCell>
                <TableCell>Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map(n => {
                return (
                  <TableRow key={n.id}>
                    <TableCell component="th" scope="row">
                      {n.name}
                    </TableCell>
                    <TableCell>
                      <Button variant="contained" color="primary" size="small">
                        Ver Permisos
                      </Button>
                    </TableCell>
                    <TableCell>
                      <IconButton variant="fab" mini="true" color="inherit" className={ classes.fabButton }>
                        <EditIcon/>
                      </IconButton>
                      <IconButton variant="fab" mini="true" aria-label="Eliminar" color="secondary" className={ classes.fabButton }>
                        <DeleteIcon/>
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      </Grid>
    </Grid>
  )
}
export default withStyles(listStyle)(ListModules);