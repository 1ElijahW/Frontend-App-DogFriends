import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import api from '../api/apiConfig';
import '../App.css'

const ProfileDetails = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [dogData, setDogData] = useState(null);
  const [ownerData, setOwnerData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dogId = props.dogId; // Use the dogId prop
        const dogResponse = await api.get(`/dogs/${dogId}`);
        const ownerResponse = await api.get(`/owners/${dogResponse.data.owner}`);
        setDogData(dogResponse.data);
        setOwnerData(ownerResponse.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [props.dogId]); // Include props.dogId in the dependency array

  const handleModalOpen = () => {
    setModalIsOpen(true);
  };

  const handleModalClose = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <button onClick={handleModalOpen}>About</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleModalClose}
        className="custom-modal" 
        // Add modal styles and options as needed
      >
        <h2>About</h2>
        {dogData && (
          <div>
            <p>Caption: {dogData.caption}</p>
            <p>Breed: {dogData.breed}</p>
            <p>Birthday: {dogData.birthday}</p>
          </div>
        )}
        {ownerData && (
          <div>
            <h3>Owner</h3>
            <p>Name: {ownerData.name}</p>
            <p>Handle: {ownerData.username}</p>
          </div>
        )}
        <button onClick={handleModalClose}>Close</button>
      </Modal>
    </div>
  );
};

export default ProfileDetails;
