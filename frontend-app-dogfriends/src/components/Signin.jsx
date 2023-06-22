import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signin } from '../api/auth'
import { AuthContext } from "../context/AuthContextComponent";

export default function Signin() {
  const [text, setText] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const { setIsLoggedIn } = useContext(AuthContext)

  async function handleSubmit(e) {
    e.preventDefault()
    const response = await signin(text, password).catch(err => console.error(err));
    console.log(response);
    if (response) {
      setIsLoggedIn(true)
      // localStorage.setItem('userId', response.data.user._id);
      // localStorage.setItem('dogId', response.data.user.dog._id);
      navigate('/')
    }
  }

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
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