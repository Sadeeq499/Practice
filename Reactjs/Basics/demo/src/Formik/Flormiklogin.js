import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
export default function Flormiklogin() {

  const formik = useFormik({
      initialValues:{
          email:'',
          password:''
      },
      onSubmit:values=>{
          console.log(values)
      },
      validationSchema: Yup.object({
          email: Yup.string().email('Invalid email address').required('Required').max(25,'Email must be 15 characters long').min(8,'Email must be 8 characters long'),
          password: Yup.string().required('Required').min(5,<p>Password must be 8 characters long,</p>).max(15,'Password must be 15 characters long')
      })
  })
  
  return (
    <div>
      <h1>Formik Login</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" value={formik.values.email} 
        onChange={formik.handleChange}
        onBlur={formik.handleBlur} />
        {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
        <label htmlFor="password">Password</label>
        <input type="password" name="password"
         id="password"
          value={formik.values.password}
           onChange={formik.handleChange}
           onBlur={formik.handleBlur}
           />
        {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}
        <button type="submit">Submit</button> 
        
      </form>
    </div>
  )
}
