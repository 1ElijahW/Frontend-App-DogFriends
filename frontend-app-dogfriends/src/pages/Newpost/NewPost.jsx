import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


import axios from 'axios';
function NewPost() {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [text, setText] = useState('');
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const fileInputRef = useRef(null);
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  const removeImage = () => {
    setImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  useEffect(() => {
    const openCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          streamRef.current = stream;
        } else {
          console.error("Video element is not rendered yet.");
        }
      } catch (error) {
        console.error("Error accessing camera:", error);
      }
    };

    if (isCameraOpen) {
      openCamera();
    }
  }, [isCameraOpen]);

  const handleOpenCamera = () => {
    setIsCameraOpen(true);
  };

  const handleCloseCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
    }
    setIsCameraOpen(false);
  };

  const captureImage = () => {
    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    canvas.getContext('2d').drawImage(videoRef.current, 0, 0);
    canvas.toBlob(blob => {
      setImage(blob);
      handleCloseCamera();
    });
  };

  const handleSubmit = async () => {
    const dogId = localStorage.getItem('dogId');
    console.log("Retrieved dogId from local storage:", dogId);
    const formData = new FormData();
    formData.append('photo', image); // Change 'image' to 'photo' to match backend field name
    formData.append('text', text);

    // You may need to adjust the URL endpoint according to your backend setup
    try {
      const response = await axios.post('http://localhost:3500/api/posts', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization':  localStorage.getItem('token'),
          'dogId': dogId
        },
      });
      console.log(response.data);
      alert('New Post Created Succesfully!')
      navigate('/');
    } catch (error) {
      console.error('Error submitting post:', error.response.data.message);
    }
  };

  return (
    <div>
      <h1>New Post</h1>

      {/* Image will be displayed here */}
      <div className="image-container">
        {image && (
          <>
            <img src={URL.createObjectURL(image)} alt="User post" className="uploaded-image" />
            <button className="remove-image-button" onClick={removeImage}>X</button>
          </>
        )}
      </div>

      {/* Upload Image Button */}
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={(e) => setImage(e.target.files[0])}
      />

      {/* Take a Picture Button */}
      {!isCameraOpen ? (
        <button onClick={handleOpenCamera}>Take a Picture</button>
      ) : (
        <div className="camera-container">
          <button className="close-camera-button" onClick={handleCloseCamera}>X</button>
          <video ref={videoRef} autoPlay></video>
          <button onClick={captureImage}>Capture</button>
</div>
)}

{/* Text Input for Status */}
<textarea
  placeholder="What's on your mind?"
  value={text}
  onChange={(e) => setText(e.target.value)}
  className="status-input"
/>

{/* Submit Button */}
<button onClick={handleSubmit}>Submit</button>
</div>
);
}

export default NewPost;
