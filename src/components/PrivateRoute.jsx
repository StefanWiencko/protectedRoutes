import React from "react";
import { Redirect, Route } from "react-router-dom/cjs/react-router-dom.min";

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        return rest.props === true ? children : <Redirect to="/login" />;
      }}
    />
  );
}

export default PrivateRoute;
