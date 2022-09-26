import React, {useState, useEffect} from 'react'

const Login = ({onLogin}) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "applcation/json",
            },
            body: JSON.stringify({username, password}),
        })
        .then(r =>{
            if (r.ok) {
                r.json().then((user) => onLogin(user))
            }
        })
    }

  return (
    <div>
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
    </div>
  )
}

export default Login