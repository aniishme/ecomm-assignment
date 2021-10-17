import React, { useEffect, useLayoutEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/home.css";

import NavbarComponent from "./components/NavbarComponent";
import ProtectedRoutes from "./components/ProtectedRoutes";
import AuthRoutes from "./components/AuthRoutes";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderList from "./pages/OrderList";

// import Profile from "./pages/Profile";

function App() {
  const [auth, setAuth] = useState(false);
  useLayoutEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuth(true);
    }
  }, []);

  return (
    <>
      <NavbarComponent auth={auth} />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/signup" component={SignUp}></Route>
        <AuthRoutes
          path="/login"
          component={Login}
          isAuth={auth}
          setAuth={setAuth}
        ></AuthRoutes>

        <ProtectedRoutes
          path="/cart"
          component={Cart}
          isAuth={auth}
          setAuth={setAuth}
        ></ProtectedRoutes>
        <ProtectedRoutes
          path="/checkout"
          component={Checkout}
          isAuth={auth}
          setAuth={setAuth}
        ></ProtectedRoutes>
        <ProtectedRoutes
          path="/orderlist"
          component={OrderList}
          isAuth={auth}
          setAuth={setAuth}
        ></ProtectedRoutes>
      </Switch>
    </>
  );
}

export default App;
