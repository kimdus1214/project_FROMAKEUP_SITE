import React from "react";
import { Switch, Route} from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import Home from "./page/Home";
import Login from "./page/Login";
import NaviBar from "./page/NaviBar";
import Register from './page/Register';
import {lightTheme} from './theme/theme';
import Auth from '../src/hoc/auth';
import UploadProduct from "./components/upload/UploadProduct";
import DetailProduct from "./page/detailProductPage/DetailProduct";
import Cart from "./page/cartPage/Cart";
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <NaviBar />
      <Switch>
        <Route exact path="/" component={Auth(Home, null)}/>
        <Route exact path="/login" component={Auth(Login, false)}/>
        <Route exact path="/register" component={Auth(Register, false)}/>
        <Route exact path="/product/upload" component={Auth(UploadProduct, true, true)}/>
        <Route exact path="/product/:productId" component={Auth(DetailProduct, null)}/>
        <Route exact path="/user/cart" component={Auth(Cart, true)}/>
      </Switch>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
