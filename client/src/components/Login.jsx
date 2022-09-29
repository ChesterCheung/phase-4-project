import React, {useState} from 'react'
import Signup from './Signup'

const Login = ({onLogin}) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [showLogin, setShowLogin] = useState("true")

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({username, password}),
        })
        .then(resp => resp.json())
        .then (user => {
            onLogin(user.username)
        })
    }

  return (
    <div>
        {showLogin ? (
            <>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Username</label>
                        <input type="text" name="username" id="username" value={username} onChange={e => setUsername(e.target.value)}/>
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" name="password" id="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <input type="submit" value="Login" />
                </form>
                <div>
                    <label>Don't have an account?</label>
                    <button onClick={() => setShowLogin(false)}>Sign up</button>
                </div>
            </> ) : (
            <>
                <Signup setShowLogin={setShowLogin} onLogin={onLogin}/>
            </>
        )}   
    </div>
  )
}

export default Login