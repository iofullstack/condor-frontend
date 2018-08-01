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
const Modules = Loadable({
  loader: ()=> import('../../modules'),
  loading: Loading
});
const Permits = Loadable({
  loader: ()=> import('../../permits'),
  loading: Loading
});
const RouterList = (props)=>{
  return(
    <Switch>
      <PrivateRoute path="/profile-security" component={ ProfileSecurity } isAuth={ props.auth } />
      <PrivateRoute path="/modules/:idModule" component={ Permits } isAuth={ props.auth } />
      <PrivateRoute path="/modules" component={ Modules } isAuth={ props.auth } />
      <Route exact path="/" component={ HomePage }/>
      <Route component={NoMatch} />
    </Switch>        
  )
}


export default RouterList;
