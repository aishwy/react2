import React, { Component } from 'react';
<<<<<<< HEAD
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
class App extends Component {
  render() {
    return (
      <Layout >
        <BurgerBuilder />
      </Layout>
=======

import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Blog />
      </div>
>>>>>>> 3c853b0899e27319ae0bbb2ecc75925e026051dc
    );
  }
}

export default App;
