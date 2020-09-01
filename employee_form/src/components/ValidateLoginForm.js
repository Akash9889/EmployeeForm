import React from 'react'
import {Formik} from 'formik'
import {connect} from 'react-redux'
import {useHistory, useLocation} from 'react-router-dom'

import '../App.css'
import {authenticator} from '../redux'
import {validationSchema} from '../containers/ValidationSchema'


const ValidateLoginForm =(props) => {
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/employeeData" } };
    let login = () => {
        console.log(history)
        if(!props.validUser){
            history.replace(from);
        }
    };

    return(

        <Formik
            initialValues = {{email :'', password :''}}
            onSubmit={ async (values, {setSubmitting, resetForm}) => {
                setSubmitting(true)
                await props.validateUser(values)
               
                setSubmitting(false)
                resetForm()
                login()           
            }}
            
            //here we will validate using yup
            validationSchema = {validationSchema}      
            
        >
            {props => {
                const {
                    values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleblur,
                    handleSubmit,

                } = props;
                
                return(
                    <form onSubmit ={handleSubmit} autoComplete='off'>

                        <label htmlFor='email'>Username </label>
                        <input type='text' 
                            name = 'email' 
                            placeholder='Enter email' 
                            value = {values.email}
                            onChange= {handleChange}
                            onBlur= {handleblur}
                            className= {errors.email && touched.email && 'error'}
                            
                        />

                        {errors.email &&  touched.email && (
                            <div className = 'input-feedback'>{errors.email}</div>
                        )}

                        <label htmlFor='password'>Password </label>
                        <input type='password' 
                            name = 'password' 
                            placeholder='Enter password' 
                            value ={values.password}
                            onChange= {handleChange}
                            onBlur={handleblur}
                            className={errors.password && touched.password && 'error'}
                        />

                        {errors.password && touched.password && (
                            <div className = 'input-feedback'>{errors.password}</div>
                        )}

                        <button type ='submit' disabled={isSubmitting}>Submit </button>
                    </form>    
                )
            }}
        </Formik>
    )
}

const mapStateToProps = state => {
    console.log(state.user.isValidUser)
    return{
        validUser : state.user.isValidUser
    }
  }

const mapDispathToProps = dispatch => {
    return{
           validateUser : (userDetails) => dispatch(authenticator(userDetails)) 
    }
}

export default connect(mapStateToProps, mapDispathToProps)(ValidateLoginForm)