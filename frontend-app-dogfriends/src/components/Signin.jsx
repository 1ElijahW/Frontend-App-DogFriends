import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signin } from '../api/auth'
import { AuthContext } from "../context/AuthContextComponent";
import '../App.css'

export default function Signin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const { setIsLoggedIn } = useContext(AuthContext)

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.value, "here targetvalue")
    const response = await signin(username, password).catch(err => console.error(err));
    console.log('Response:');
    console.log(response);
    if (response) {
      setIsLoggedIn(true);
      localStorage.setItem('ownerId', response?.user._id);
      localStorage.setItem('ownerName', response?.user.username);
      localStorage.setItem('dogId', response?.user.dogs[0]);
      navigate('/');
    }
}

  return (
    <div className="container">
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
      <input 
          type="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button>Signin</button>
      </form>
      <span>
        {'Not already a member?'}
        <Link to="/auth/signup">Go to Signup</Link>
        {' instead.'}
      </span>
    </div>
  )
}