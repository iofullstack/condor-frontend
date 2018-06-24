import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Loadable from 'react-loadable';

/*loading*/
import Loading from '../../common/loading/loading';
/*404 error*/
import NoMatch from '../../common/notmatch/notmatch';
/*Home Page*/
import HomePage from '../../pages/home-page';
/*Footer Page*/
import Footer from '../../common/footer/footer';

/*components format Code - Splitting
const EventPage = Loadable({
  loader: ()=> import('../../pages/event-page/containers/event-page'),
  loading: Loading
})
*/

const RouterList = (props)=>(
  <Router>
    <div className="RouterList-container" style={ {height:'100vh'} }>
      { props.children }
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route component={NoMatch} />
      </Switch>
      <Footer/>
    </div>
  </Router>
)


export default RouterList;
