import React, { useEffect, useState } from 'react';
import api from '../api/apiConfig';

function OwnerInfoComponent() {
  const [owner, setOwner] = useState({});

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    api.get(`/owners/${userId}`).then(res => setOwner(res.data));
  }, []);

  const handleInputChange = (event) => {
    setOwner({ ...owner, [event.target.name]: event.target.value });
  }

  const handleUpdateClick = () => {
    const userId = localStorage.getItem('userId');
    api.put(`/owners/${userId}`, owner);
  }

  const handleDeleteClick = () => {
    const userId = localStorage.getItem('userId');
    api.delete(`/owners/${userId}`);
  }

  return (
    <div>
      <h1>{owner.username}</h1>
      <input name="username" value={owner.username} onChange={handleInputChange} />
      <h2>{owner.name}</h2>
      <input name="name" value={owner.name} onChange={handleInputChange} />
      <h3>{owner.socialLink}</h3>
      <input name="socialLink" value={owner.socialLink} onChange={handleInputChange} />
      <button onClick={handleUpdateClick}>Update</button>
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  );
}

export default OwnerInfoComponent;
