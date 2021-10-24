import { Route, Switch,Redirect } from 'react-router-dom';
import Welcome from './Pages/Welcome';
import Products from './Pages/Products';
import MainHeader from './Components/MainHeader';
import ProductsDetail from './Pages/ProductsDetail';
function App() {
  return (
    <div>
      <MainHeader></MainHeader>
      <main>
        <Switch>
          <Route path='/' exact>
            <Redirect to='Welcome' />
          </Route>
      <Route path="/Welcome">
        <Welcome /> 
      </Route>
      <Route path="/Products" exact>
        <Products />
      </Route>
      <Route path='/products/:productId'>
        <ProductsDetail />
      </Route>
      </Switch>
      </main>
    </div>
  );
}

export default App;
