import React, { useEffect, useState } from 'react';
import api from '../api/apiConfig';

function OwnerInfoComponent() {
  const [owner, setOwner] = useState({username: "", name: "", socialLink: "", password: ""});

  console.log(owner);
  
  useEffect(() => {
    const ownerId = localStorage.getItem('ownerId');
    api.get(`/owners/${ownerId}`).then(res => {
      if(res.data) { 
        setOwner(res.data);
      }
    });
  }, []);

  const handleInputChange = (event) => {
    setOwner({ ...owner, [event.target.name]: event.target.value });
  }

  const handleUpdateClick = () => {
    const ownerId = localStorage.getItem('ownerId');
    console.log(owner)
    api.put(`/owners/${ownerId}`, owner);
  }

  const handleDeleteClick = () => {
    console.log('Delete button clicked');
    const ownerId = localStorage.getItem('ownerId');
    api.delete(`/owners/${ownerId}`)
       .then(res => console.log(res.data))
       .catch(error => console.error('Delete failed', error));
  }
  
  
  console.log(owner);
  console.log(owner.username);
  
  return (
    <div>
      <h1>{owner.username}</h1>
      <input name="username" value={owner.username} onChange={handleInputChange} placeholder="Owner's username" />
      <h2>{owner.name}</h2>
      <input name="password" onChange={handleInputChange} type="password" placeholder="Owner's password" />
      <h3>{owner.socialLink}</h3>
      <input name="socialLink" value={owner.socialLink} onChange={handleInputChange} placeholder="Owner's social link" />
      <button onClick={handleUpdateClick}>Update</button>
      <button onClick={handleDeleteClick}>Delete Account</button>
    </div>
  );
}

export default OwnerInfoComponent;