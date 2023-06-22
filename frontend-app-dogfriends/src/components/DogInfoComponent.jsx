import React, { useEffect, useState } from 'react';
import api from '../api/apiConfig';

function DogInfoComponent() {
  const [dog, setDog] = useState({});

  useEffect(() => {
    const dogId = localStorage.getItem('dogId');
    api.get(`/dogs/${dogId}`).then(res => setDog(res.data));
  }, []);

  const handleInputChange = (event) => {
    setDog({ ...dog, [event.target.name]: event.target.value });
  }

  const handleUpdateClick = () => {
    const dogId = localStorage.getItem('dogId');
    api.put(`/dogs/${dogId}`, dog);
  }

  const handleDeleteClick = () => {
    const dogId = localStorage.getItem('dogId');
    api.delete(`/dogs/${dogId}`);
  }

  return (
    <div>
      <h1>{dog.name}</h1>
      <input name="name" value={dog.name} onChange={handleInputChange} />
      <img src={dog.image} alt={dog.name} />
      <input name="image" value={dog.image} onChange={handleInputChange} />
      <p>{dog.caption}</p>
      <input name="caption" value={dog.caption} onChange={handleInputChange} />
      <p>{dog.breed}</p>
      <input name="breed" value={dog.breed} onChange={handleInputChange} />
      <p>{dog.birthday}</p>
      <input name="birthday" value={dog.birthday} onChange={handleInputChange} />
      <button onClick={handleUpdateClick}>Update</button>
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  );
}

export default DogInfoComponent;
