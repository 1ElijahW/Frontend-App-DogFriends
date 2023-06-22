import React, { useEffect, useState } from 'react';
import api from '../api/apiConfig';
import { getDogBy, updateDog, deleteDog } from '../api/dogService';

function DogInfoComponent() {
  const [dog, setDog] = useState({});

  useEffect(() => {
    const dogId = localStorage.getItem('dogId');
    api.get(`/dogs/${dogId}`).then(res => setDog(res.data));
  }, []);

  //Try to get it working like this instead
  // useEffect(() => {
  //   const fetchDog = async (dogId) => {
  //     try {
  //       const dogData = await getDogById(dogId);
  //       setDog(dogData);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   if (dogId) {
  //     fetchDog();
  //   }
  // }, [dogId]);

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
      <input name="name" value={dog.name} onChange={handleInputChange} placeholder="Dog's name" />
      <img src={dog.image} alt={dog.name} />
      <input name="image" value={dog.image} onChange={handleInputChange} placeholder="Dog's image URL" />
      <p>{dog.caption}</p>
      <input name="caption" value={dog.caption} onChange={handleInputChange} placeholder="Dog's caption" />
      <p>{dog.breed}</p>
      <input name="breed" value={dog.breed} onChange={handleInputChange} placeholder="Dog's breed" />
      <p>{dog.birthday}</p>
      <input name="birthday" value={dog.birthday} onChange={handleInputChange} placeholder="Dog's birthday" />
      <button onClick={handleUpdateClick}>Update</button>
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  );
}

export default DogInfoComponent;
