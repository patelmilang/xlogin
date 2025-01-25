import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState({
    username: '',
    password: ''
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);


  const handleChange = (e) => {
    if (e.target.name === 'username') {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
    else if (e.target.name === 'password') {
      setUser({ ...user, [e.target.name]: e.target.value });
    }

  }
  const handleSave = (e) => {
    e.preventDefault();
    setIsError(false);
    if (user.username === 'user' && user.password == 'password') {
      setIsLoggedIn(true);
    } else {
      setIsError(true)
    }
  }
  return (
    <form onSubmit={(e) => handleSave(e)} >
      <div style={{
        display: "flex",
        flexDirection: "column",
        padding:"20px"

      }}>
        <h2>Login Page</h2>
        {isError && <div style={{padding:"20px", color:"red"}}>
          Invalid username or password
        </div>}
        {!isLoggedIn && <>
          <div>
            Username : <input type='text' name="username" placeholder='username' value={user.username} onChange={(e) => handleChange(e)} required />
          </div>
          <div>
            Password : <input type='password' name="password" placeholder='password' value={user.password} onChange={(e) => handleChange(e)} required />
          </div>
          <div>
            <button type='submit' value='Login' name='Login' >Login</button>
          </div>
        </>}
        {isLoggedIn && <>
        <p>
          Welcome, user!
        </p>
        </>

        }
      </div>
    </form>
  );
}

export default App;
