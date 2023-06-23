import React from 'react';
import ProfilePicture from '../../components/ProfilePicture';
import ProfileDetails from '../../components/ProfileDetails';
import Posts from '../../components/Posts';

function Profile() {

  const dogId = localStorage.getItem("dogId");
  return (
    <div>
    <ProfilePicture/>
    <ProfileDetails/>
    <Posts dogId={dogId}/>
    </div>
  )
}

export default Profile