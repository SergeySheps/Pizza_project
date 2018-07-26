import React from 'react'
import LoginForm from '../components/LoginForm'

const LoginPage = props => {
  return (
    <div className="login">
      <main className="login__content">
        <LoginForm onSubmit={values => alert(JSON.stringify(values, null, 2))} />
      </main>
    </div>
  )
}

export default LoginPage
