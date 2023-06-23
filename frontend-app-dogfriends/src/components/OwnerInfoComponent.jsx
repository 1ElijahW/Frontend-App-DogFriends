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
    api.put(`/owners/${ownerId}`, owner)
       .then(res => {
           alert('Information updated successfully');
       })
       .catch(error => console.error('Update failed', error));
  }

  const handleDeleteClick = () => {
    console.log('Delete button clicked');
    const ownerId = localStorage.getItem('ownerId');
    const dogId = localStorage.getItem('dogId'); // Get dogId from local storage
    api.delete(`/dogs/${dogId}`) // Delete dog
       .then(res => console.log('Dog deleted'))
       .catch(error => console.error('Delete failed', error));
    api.delete(`/owners/${ownerId}`) // Delete owner
       .then(res => {
           console.log(res.data);
           alert('Account deleted successfully');
       })
       .catch(error => console.error('Delete failed', error));
  }

  console.log(owner);
  console.log(owner.username);
  
return (
  <div>
    <h1>{owner.username}</h1>
    <input name="password" onChange={handleInputChange} type="password" placeholder="Owner's password" />
    <input name="socialLink" onChange={handleInputChange} placeholder="Owner's social link" />
    <button onClick={handleUpdateClick}>Update</button>
    <button onClick={handleDeleteClick}>Delete Account</button>
  </div>
);

}

export default OwnerInfoComponent;
