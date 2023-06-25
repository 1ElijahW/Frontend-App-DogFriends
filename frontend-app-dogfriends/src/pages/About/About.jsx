import React from 'react';
import './about.css';


function About() {
  return (
    <div className="AboutContainer">
      <div className="AboutPicture">
        <a href="#">
          <img src="https://i.imgur.com/RhHAOXd.jpeg" alt="About Pic" />
        </a>
      </div>
      <div className="AboutText">
        <p>
          Welcome to Dog Friends, a community-driven platform for dog lovers! Our mission is to connect dog owners, enthusiasts, and professionals to share knowledge, resources, and adorable moments with our beloved furry friends. Whether you're looking for tips on dog care, training advice, or simply want to connect with other dog lovers, Dog Friends is the perfect place for you.
        </p>
        <h2>How to Use Dog Friends</h2>
        <ol>
          <li>Create an Account: To get started, sign up for a Dog Friends account. It's quick and easy! Just provide your name, email address, and create a password.</li>
          <li>Explore Dog Profiles: Once you're logged in, you can explore various dog profiles. Discover different breeds, view their photos, and learn more about their characteristics and needs. Get inspired by the diversity of our furry friends!</li>
          <li>Connect with Dog Owners: Connect with fellow dog owners by sending friend requests. Share experiences, exchange tips, and build a network of dog-loving friends. You can also join breed-specific groups or participate in dog-related discussions.</li>
          <li>Post Updates and Photos: Share your dog's adorable moments, training achievements, or any dog-related updates with the Dog Friends community. Upload photos, write captions, and let others celebrate your dog's special moments with you.</li>
          <li>Discover Resources: Dog Friends provides a collection of resources to help you with dog care, training, and health. Explore articles, guides, and videos contributed by our community members and dog experts. Learn something new and enhance your dog parenting skills!</li>
          <li>Stay Engaged: Keep an eye on the Dog Friends newsfeed to stay updated on the latest posts and activities. Engage with the community by looking at posts that resonate with you. Show your support and appreciation for other dog lovers.</li>
        </ol>
        <p>
          We hope you have a paw-some time exploring Dog Friends and connecting with the dog-loving community. Remember, every dog has a story to tell, and we're excited to be a part of yours!
        </p>
      </div>
    </div>
  );
}

export default About;
