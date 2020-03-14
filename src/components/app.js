import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Navbar from "./navbar"
import Homepage from "./homepage"
import PageContent from "./pageContent"


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <div>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route path="/people" render={props => <PageContent {...props} page="people" />} />
              <Route path="/planets" render={props => <PageContent {...props} page="planets" />} />
              <Route path="/species" render={props => <PageContent {...props} page="species" />} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
