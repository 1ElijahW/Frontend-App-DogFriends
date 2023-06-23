import React, { useState } from "react";

const Profile = () => {
  const [profileImage, setProfileImage] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setProfileImage(selectedFile);
  };

  const handleUpload = () => {
    // TODO
    // Implement file upload logic here
    // Axios or the fetch API to send the file to your server
    // update the user's profile information and display the new profile picture
  };

  return (
    <div>

      <h2>Profile</h2>

      <div>
        {/* Input field for selecting a file */}
        <input type="file" onChange={handleFileChange} />


        {/* Button to trigger the upload */}
        <button 
          style={{
            backgroundColor: "rgb(14, 104, 214)",
            color: "#fcfcfc",
            border: "1px solid #bbbbbb",
            borderRadius: "10px"
          }}
        onClick={handleUpload}>Upload</button>

      </div>

      <div>
        {/* Display the current profile picture */}
        {profileImage && (
          <img
            src={URL.createObjectURL(profileImage)}
            alt="Profile"
            className="ProfilePicture"
          />
        )}
      </div>
      
    </div>
  );
};

export default Profile;