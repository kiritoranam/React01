import { Fragment } from 'react';
import { Route, Switch } from 'react-router';

import MainHeader from './Components/Layout/MainHeader';
import Login from './Components/Login/Login';
import EditProduct from './Components/Product/EditProduct';
import Product from './Components/Product/product';

function App() {
  return (
    <Fragment>
      <MainHeader></MainHeader>
      <Switch>
        <Route path='/' exact></Route>
      <Route path='/login'>
        <Login />
      </Route>
      <Route path='/products'>
        <Product />
      </Route>
      <Route path='/editProduct'>
        <EditProduct />
      </Route>
      </Switch>
    </Fragment>
    
  );
}

export default App;
