import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
/* code splitting */
import Loadable from 'react-loadable';
/* Rutas Privadas */
import PrivateRoute from './private-route'
/*loading*/
import Loading from '../../loading';
/*404 error*/
import NoMatch from '../../notmatch';

/*Home Page*/
const HomePage = ()=>(
  <div style={{height:'150vh'}}>Home</div>
);
/* CodeSpliting */
const ProfileSecurity = Loadable({
  loader: ()=> import('../../profile-security'),
  loading: Loading
});
/* Modules */
const AddModule = Loadable({
  loader: ()=> import('../../modules/form-module'),
  loading: Loading
});
const ListModules = Loadable({
  loader: ()=> import('../../modules/list-modules'),
  loading: Loading
});
/* Permits */
const AddPermit = Loadable({
  loader: ()=> import('../../permits/form-permit'),
  loading: Loading
});
const ListPermits = Loadable({
  loader: ()=> import('../../permits/list-permit'),
  loading: Loading
})
const RouterList = (props)=>{
  return(
    <Switch>
      <PrivateRoute path="/profile-security" component={ ProfileSecurity } isAuth={ props.auth } />
      {/* Modules */}
      <PrivateRoute path="/modules/add" component={ AddModule } isAuth={ props.auth } />
      <PrivateRoute path="/modules/:idModule/add" component={ AddPermit } isAuth={ props.auth } />
      <PrivateRoute path="/modules/:idModule" component={ ListPermits } isAuth={ props.auth } />
      <PrivateRoute path="/modules" component={ ListModules } isAuth={ props.auth } />
      <Route exact path="/" component={ HomePage }/>
      <Route component={NoMatch} />
    </Switch>        
  )
}


export default RouterList;
