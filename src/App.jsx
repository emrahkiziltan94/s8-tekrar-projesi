import { useState } from 'react';
import './App.css';
import Category from './components/Category.jsx';
import ProductAdd from './components/ProductAdd.jsx';
import SideBar from './components/SideBar.jsx';
import { Switch, Route } from 'react-router-dom';
import { products } from './data.jsx';
function App() {
  const [productList, setProductList] = useState(products);

  const changeTitle = (id) => {
    let foundProduct = productList.find((product) => product.id === id);
    foundProduct.title = 'test deneme';
    setProductList([...productList]);
  };
  const addNewProduct = (product) => {
    setProductList([...productList, product]);
  };

  return (
    <>
      <div className="container">
        <SideBar />
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <Category productList={productList} changeTitle={changeTitle} />
            </Route>
            <Route path="/product-add">
              <ProductAdd addNewProduct={addNewProduct} />
            </Route>
          </Switch>
        </div>
      </div>
    </>
  );
}

export default App;
