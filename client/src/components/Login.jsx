import React, {useState} from 'react'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'

const Login = ({onLogin}) => {
    const [showLogin, setShowLogin] = useState("true")

  return (
    <div>
        {showLogin ? (<LoginForm setShowLogin={setShowLogin} onLogin={onLogin}/>) : (<SignupForm setShowLogin={setShowLogin}/>)}   
    </div>
  )
}

export default Login