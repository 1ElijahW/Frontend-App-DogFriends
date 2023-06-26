import React, { useEffect, useState } from 'react';
import api from '../api/apiConfig';
import '../pages/Settings/settings.css';

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
  <div className="content-container">
  <div className="info-component">
      <h2>Pup</h2>
      <div className="input-label">
          <input name="name" onChange={handleInputChange} placeholder="Pups's name" />
          <input name="caption" onChange={handleInputChange} placeholder="Dog's Bio" />
      </div>
      <div className="input-label">
          <input name="breed" onChange={handleInputChange} placeholder="Dog's breed" />
       
          <input name="birthday" onChange={handleInputChange} placeholder="Birthday MM/DD/YYYY" />
      </div>
      <button onClick={handleUpdateClick}>Update</button>
  </div>
  </div>
);
}

export default DogInfoComponent;
