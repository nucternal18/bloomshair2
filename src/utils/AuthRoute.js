import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

//Context
import { AuthContext } from '../context/context';

const AuthRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default AuthRoute;
