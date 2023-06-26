import React from 'react';
import ProfilePicture from '../../components/ProfilePicture';
import ProfileDetails from '../../components/ProfileDetails';
import Posts from '../../components/Posts';
import { useParams } from 'react-router-dom';
import './profile.css'


function Profile() {
  const params = useParams();
  let dogId;

  if ((Object.keys(params).length === 0)) {
    console.log("If params empty, it means you are going to your own profile");
    dogId = localStorage.getItem("dogId");
  } else {
    dogId = params.author;
  }

  //const dogId = localStorage.getItem("dogId");
  return (
    <div>
    <ProfilePicture/>
    <ProfileDetails/>
    <Posts dogId={dogId}/>
    </div>
  )
 }

export default Profile





// import React from 'react';
// import ProfilePicture from '../../components/ProfilePicture';
// import ProfileDetails from '../../components/ProfileDetails';
// import Posts from '../../components/Posts';
// import './profile.css';
// import { useParams } from 'react-router-dom';

// function Profile() {

//   const params = useParams();
//   let dogId;

//   if ((Object.keys(params).length === 0)) {
//     console.log("If params empty, it means you are going to your own profile");
//     dogId = localStorage.getItem("dogId");
//   } else {
//     dogId = params.author;
//   }

//   return (
//     <div>
//     <ProfilePicture/>
//     <ProfileDetails/>
//     <Posts dogId={dogId}/>
//     </div>
//   )
// }

// export default Profile