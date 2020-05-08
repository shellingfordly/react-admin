import React from 'react';
import { Switch, Route } from 'react-router-dom'
import AddProduct from './AddProduct';
import ProductHome from './ProductHome';

export default class Product extends React.Component {

  render() {
    return (
      <Switch>
        <Route path='/admin/products/product/add' component={AddProduct}></Route>
        <Route path='/admin/products/product' exact component={ProductHome}></Route>
      </Switch>
    )
  }
}