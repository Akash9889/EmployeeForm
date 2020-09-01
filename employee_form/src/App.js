import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css';
import ValidateLoginForm from './components/ValidateLoginForm';
import EmployeeTable from './components/EmployeeTable';
import PrivateRoute from './containers/PrivateRoute'

function App(props) {
  console.log(props.validUser)
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <ValidateLoginForm />
        </Route>
        <PrivateRoute validUser = {props.validUser} path="/employeeData" >
            <EmployeeTable />
        </PrivateRoute>
      </Switch>
    </Router>
  )
}

const mapStateToProps = state => {
  return{
      validUser : state.user.isValidUser
  }
}

export default connect(mapStateToProps)(App)




