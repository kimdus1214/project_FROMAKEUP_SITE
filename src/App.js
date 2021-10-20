import React from "react";
import { Switch, Route} from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import Home from "./page/Home";
import Login from "./page/Login";
import NaviBar from "./page/NaviBar";
import Register from './page/Register';
import {pupleTheme} from './theme/theme';
import Auth from '../src/hoc/auth';
import UploadProduct from "./components/upload/UploadProduct";

function App() {
  return (
    <ThemeProvider theme={pupleTheme}>
      <NaviBar />
      <Switch>
        <Route exact path="/" component={Auth(Home, false)}/>
        <Route exact path="/login" component={Auth(Login, false)}/>
        <Route exact path="/register" component={Auth(Register, false)}/>
        <Route exact path="/product/upload" component={Auth(UploadProduct, true)}/>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
