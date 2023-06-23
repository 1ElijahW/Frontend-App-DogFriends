import React, { useEffect, useState } from 'react';
import api from '../api/apiConfig';

function DogInfoComponent() {
  const [dog, setDog] = useState(null);

  useEffect(() => {
    const dogId = localStorage.getItem('dogId');
    console.log('dogId:', dogId); // Check if dogId is correct
    api.get(`/dogs/${dogId}`)
      .then(res => {
        console.log('res.data:', res.data); // Log the response from the API
        setDog(res.data);
      })
      .catch(error => console.error(error)); // Catch and log any errors
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
  
    let newValue = value;
    if (name === 'birthday') {
      const dateParts = value.split('/');
      if (dateParts.length === 3) {
        newValue = `${dateParts[2]}-${dateParts[0].padStart(2, '0')}-${dateParts[1].padStart(2, '0')}`;
      }
    }
  
    setDog({ ...dog, [name]: newValue });
  }

  const handleUpdateClick = () => {
    const dogId = localStorage.getItem('dogId');
    api.put(`/dogs/${dogId}`, dog);
  }

  if (!dog) {
    return <div>Loading...</div>;
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
    </div>
  );
}

export default DogInfoComponent;