import React from 'react'
import {Route, Redirect} from 'react-router-dom'

export default function PrivateRoute({ children, validUser, ...rest}) {
   return (
      <Route
        {...rest}
        render={({ location }) =>
          validUser ? (
            children
          ) : (
            <Redirect to={{pathname: "/", state: { from: location } }} />
          )
        }
      />
    );
  }