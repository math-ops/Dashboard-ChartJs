import React from 'react'
import { OptionSubtitle } from '../../styles/app'
import '../../styles/Login.css'

export default function Login() {
  return(
    <>
      <div className="menu-title">
        <OptionSubtitle>Vacinômetro Flex - Login</OptionSubtitle>
      </div>
      <FormLogin />
    </>
  )

}

export function FormLogin(){
  return (
    <>
    <div className="cadastro-colaborador">
        <div className="form-login">
          <form action="">
            <label className="login-label">Username</label>
            <input className="login-input" type="text" id="" name="" placeholder="Username" autoFocus required/>
            <label className="login-label">Password</label>
            <input className="login-input" type="password" id="" name="" placeholder="Password" />
            <button className="login-button" type="submit">Login</button>
            <strong className="setError">Error! - Error Message</strong>
          </form>
        </div>
      </div>
    </>
  )
}