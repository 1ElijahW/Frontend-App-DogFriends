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
    api.put(`/dogs/${dogId}`, dog)
       .then(res => {
           alert('Dog information updated successfully');
       })
       .catch(error => console.error('Update failed', error));
  }

  if (!dog) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{dog.name}</h1>
      <input name="name" onChange={handleInputChange} placeholder="Dog's name" />
      {/* <img src={dog.image} alt={dog.name} /> */}
      <input name="image" onChange={handleInputChange} placeholder="Dog's image URL" />
      <input name="caption" onChange={handleInputChange} placeholder="Dog's caption" />
      <input name="breed" onChange={handleInputChange} placeholder="Dog's breed" />
      <input name="birthday" onChange={handleInputChange} placeholder="Birthday MM/DD/YYYY" />
      <button onClick={handleUpdateClick}>Update</button>
    </div>
  );
}

export default DogInfoComponent;
