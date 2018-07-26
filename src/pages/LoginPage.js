import React from 'react'
import LoginForm from '../components/LoginForm'
import { address } from "ip";

const LoginPage = props => {
  return (
    <div className="login">
      <main className="login__content">
        <LoginForm onSubmit={values => alert(address)} />
      </main>
    </div>
  )
}

export default LoginPage
