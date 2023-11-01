import React, { useState } from 'react';
import {login} from "./userFuntion"
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here, such as sending credentials to an API
    console.log('Username:', username);
    console.log('Password:', password);
    // You can add logic here to handle authentication
    const user = {
        username:username,
        password:password
    }
    if(login(user)){
        alert("login success");
        window.location.href = '/view';
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
        <h2 style={{ textAlign: 'center' }}>Login</h2>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ marginBottom: '10px' }}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ marginBottom: '10px' }}
        />
        <button type="submit" style={{ backgroundColor: 'lightblue', padding: '10px', border: 'none', cursor: 'pointer' }}>Login</button>
      </form>
    </div>
  );
};

export default Login;
