import React, { Component } from 'react';
import {compose} from 'ramda';
import ConfigRoot from 'components/pages/ConfigRoot';
import { library } from '@fortawesome/fontawesome-svg-core'
import {Route, Switch} from 'react-router-dom';
import {withRouter} from 'react-router';

import { faBars, faPlus, faMinus, faSearch, faAngleRight, faAngleDown, faFileAlt, faSlidersH, faSignOutAlt, faDatabase, faHome, faTimes } from '@fortawesome/free-solid-svg-icons'

library.add(faBars, faPlus, faMinus, faSearch, faAngleRight, faAngleDown, faFileAlt, faSlidersH, faSignOutAlt, faDatabase, faHome, faTimes)

class App extends Component {
  render() {
    return (
      <div className="App">
        Hello World
        <Switch>
          <Route path='/' component={ConfigRoot} />
        </Switch>
      </div>
    );
  }
}

export default compose(
  withRouter
)(App);
