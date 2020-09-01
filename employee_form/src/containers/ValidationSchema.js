import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
    email: Yup.string()
          .email()
          .required("Email is required"),
    
    password: Yup.string()
                .required('Password is required')
                .min(2, 'Seems a bit short...')
                .max(10, 'We prefer insecure system, try a shorter password.'),
    })