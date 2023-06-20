import React from 'react';
import ProfilePicture from '../components/ProfilePicture';
import ProfileDetails from '../components/ProfileDetails';
import Posts from '../components/Posts';

function Profile() {
  return (
    <div>
    <ProfilePicture/>
    <ProfileDetails/>
    <Posts/>
    </div>
  )
}

export default Profile