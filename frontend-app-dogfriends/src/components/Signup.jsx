import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { signup } from '../api/auth';
import { createDog } from '../api/dogService';  // Import the createDog function
import '../App.css';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [dog, setDog] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    
    
    // if (!dogResponse || dogResponse.status !== 200) {
    //   console.error('Error creating the dog:', dogResponse);
    //   return;  // Return early to avoid creating the owner
    // }
    
    // console.log('Dog created:', dogResponse);
    
    // Then, create a new user, passing the dog's ID
    console.log('Creating dog:', dog)

    const userResponse = await signup(username, password, dog);
  console.log("Response:", userResponse, userResponse.data)
  if (userResponse) {
    console.log('User created:', userResponse);
    console.log('userResponse.user:', userResponse?.user);
console.log('userResponse.dog:', userResponse?.dog);
    window.location.href="/auth/signin";
  }
    
    // // First, create a new dog
    // const dogResponse = await createDog({  // Use createDog instead of api.post
    //   name: dog, 
    //   ownerName: username,
    //   ownerID: userResponse.id, // Assuming the username is the dog's owner's name
    //   // Include any other required fields here
    // });


    window.location.href="/auth/signin";
  }

  return (
    <div className ="container">
      <h1>Sign Up</h1>
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
          placeholder="Password"
        />
        <input 
          type="text"
          value={dog}
          onChange={e => setDog(e.target.value)}
          placeholder="Dog's name"
        />
        <button>Signup</button>
      </form>
      <span>
        {'Already a Dog Friend User? '}
        <Link to="/auth/signin">Go to Signin</Link>
        {' instead.'}
      </span>
    </div>
  )
}
