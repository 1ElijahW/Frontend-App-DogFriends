import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../api/auth";
import { createDog } from "../api/dogService"; // Import the createDog function
import "../App.css";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [dog, setDog] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    console.log("handleSubmit called");

    console.log("Creating dog:", dog);

    const userResponse = await signup(username, password, dog);
    console.log("Response:", userResponse, userResponse.data);
    if (userResponse) {
      console.log("User created:", userResponse);
      console.log("userResponse.user:", userResponse?.user);
      console.log("userResponse.dog:", userResponse?.dog);
      navigate("/auth/signin");
    }
  }

  return (
    <div className="container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <input
          type="text"
          value={dog}
          onChange={(e) => setDog(e.target.value)}
          placeholder="Dog's name"
        />
        <button>Signup</button>
      </form>
      <span>
        {"Already a Dog Friend User? "}
        <Link to="/auth/signin">Go to Signin</Link>
        {" instead."}
      </span>
    </div>
  );
}
