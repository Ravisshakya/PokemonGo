import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';

import './custom.css'
import { PokeMonGo } from './components/PokeMonGo';
import { PokeMonGoV2 } from './components/PokeMonGoV2';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
            <Route path='/pokemon-go' component={PokeMonGo} />
            <Route path='/pokemon-go-v2' component={PokeMonGoV2} />
      </Layout>
    );
  }
}
