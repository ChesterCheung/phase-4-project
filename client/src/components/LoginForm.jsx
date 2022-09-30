import React, {useState} from 'react'

const LoginForm = ({onLogin, setShowLogin}) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const style ={display: "flex", justifyContent: "center", alignItems: "center"}

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
        <div class="container">
            <h1 style={style}>Login</h1>
            <form onSubmit={handleSubmit}>
                <div style={style}>
                    <label>Username</label>
                    <input type="text" name="username" id="username" value={username} onChange={e => setUsername(e.target.value)}/>
                    <label>Password</label>
                    <input type="password" name="password" id="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    <input style={style} type="submit" value="Login" />
                </div>
            </form>
            <div style={style}>
                <label >Don't have an account?</label>
                <button onClick={() => setShowLogin(false)} style={style}>Sign up</button>
            </div>
        </div>
  )
}

export default LoginForm