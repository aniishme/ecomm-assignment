import React, { useEffect, useLayoutEffect } from "react";
import { Route, Redirect } from "react-router-dom";

function AuthRoutes({ isAuth, setAuth, component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      component={(props) => {
        if (!isAuth) {
          return <Component isAuth={isAuth} setAuth={setAuth} />;
        } else {
          return (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          );
        }
      }}
    />
  );
}

export default AuthRoutes;
