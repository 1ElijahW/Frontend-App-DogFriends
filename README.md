# DogFriends - A Social Networking App for Dog Lovers!

Welcome to DogFriends, a fantastic social networking app designed exclusively for dog lovers!

DogFriends is an exciting and engaging web application that brings together a community of dog owners, dog enthusiasts, and dog-related content. Whether you're seeking advice, sharing memorable moments, or simply looking to connect with like-minded individuals, this app has got you covered.

## Technologies Used
- React
- JavaScript
- Node.js
- Express.js
- MongoDB
- HTML/CSS

## Screenshots
![Screenshot 1](https://github.com/1ElijahW/Frontend-App-DogFriends/assets/131682732/11c662c3-4cdf-464f-8a39-112965c5d5ef)
![Screenshot 2](https://github.com/1ElijahW/Frontend-App-DogFriends/assets/131682732/51332828-bddc-4db3-9fdf-d0b10288060f)
![Screenshot 3](https://github.com/1ElijahW/Frontend-App-DogFriends/assets/131682732/74d606a1-c96f-4c40-938d-6a2e96d9441d)
![Screenshot 4](https://github.com/1ElijahW/Frontend-App-DogFriends/assets/131682732/c14bf89d-d9a6-4f89-a7bf-c847b2d4cf56)
![Screenshot 5](https://github.com/1ElijahW/Frontend-App-DogFriends/assets/131682732/64f21d1c-1192-41f7-8751-c4b95bb779eb)

## User Stories/MVP:
- Press signup button on the landing page and be taken to the signup page.
- Press login button to sign in
- Upon Login, see newsfeed/home page to see posts by community
- On all pages, sidebar with additional buttons exists.
- Click “new post” button in sidebar to be taken to “new post” page
- Click profile button to be taken profile page
- Click logout button to be able to logout
- Click about to be told about the app
- Click settings to be taken to settings page






## Getting Started
To get started with DogFriends, follow these steps:

1. Register a new account by clicking on the 'Sign Up' button on the homepage.

2. Once registered, you can log in by clicking on the 'Sign In' button and entering your credentials.

3. After signing in, you will be taken to the home page where you can see posts by the dogs.

4. You can navigate to different parts of the application using the sidebar. Here you can create a new post, view your profile, sign out, learn about the app, and access settings.

5. On your profile page, you can see information related to your account and your dogs. You can add a new dog to your profile by using the 'Add New Dog' feature.

6. If you want to create a new post, you can do so by clicking the 'New Post' button on the sidebar. This will take you to a new post page where you can enter the title and content of your post.

7. Remember to log out when you're done by clicking the 'Logout' button on the sidebar.

Please make sure to remember your credentials as you will need them to access your account and interact with the DogFriends community.

## Stretch Goals
We have some exciting enhancements planned for DogFriends:

1. **Dog Matching Algorithm**: We plan to implement a matching algorithm that pairs users based on the compatibility of their dogs, taking into account factors like breed, age, and personality traits.

2. **Interactive Map**: We're aiming to integrate an interactive map feature, where users can find and interact with other dog owners in their vicinity.

3. **Advanced Search and Filters**: We aim to improve the post search functionality by adding advanced filters. Users will be able to search for posts based on specific criteria like breed, location, or dog age.

4. **Enhanced Profile Customization**: We're looking to provide more options for users to customize their profiles, including the ability to add multiple photos of their dogs, customize profile layouts, and more.

Remember to check back often for updates and feel free to provide feedback or suggestions!

## API Routes

### User Routes

- **Register User**
  - URL: `/api/auth/signup`
  - Method: POST
  - Description: Register a new user.
  - Controller Method: `registerUser`

- **Login User**
  - URL: `/api/auth/signin`
  - Method: POST
  - Description: Login an existing user.
  - Controller Method: `loginUser`

- **Update Password**
  - URL: `/users/:username/updatePassword`
  - Method: PUT
  - Description: Update the password of a user.
  - Controller Method: `updatePassword`

- **Get User**
  - URL: `/users/:username`
  - Method: GET
  - Description: Get user information by username.
  - Controller Method: `getUser`

- **Update Username**
  - URL: `/users/:username/updateUsername`
  - Method: PUT
  - Description: Update the username of a user.
  - Controller Method: `updateUsername`

- **Update Email**
  - URL: `/users/:username/updateEmail`
  - Method: PUT
  - Description: Update the email of a user.
  - Controller Method: `updateEmail`

### Post Routes

- **Create Post**
  - URL: `/posts/create`
  - Method: POST
  - Description: Create a new post.
  - Controller Method: `createPost`

- **Get Posts**
  - URL: `/api/posts`
  - Method: GET
  - Description: Get all posts.
  - Controller Method: `getPosts`

- **Get Posts by ID**
  - URL: `/api/posts/:id`
  - Method: GET
  - Description: Get all posts by a user.
  - Controller Method: `getPosts`

- **Update Post**
  - URL: `/api/posts/:id`
  - Method: PUT
  - Description: Update a post by a user and post ID.
  - Controller Method: `updatePost`

- **Delete Post**
  - URL: `/posts/:username/:postId`
  - Method: DELETE
  - Description: Delete a post by a user and post ID.
  - Controller Method: `deletePost`

### Dog Routes

- **Add Dog**
  - URL: `/api/dogs`
  - Method: POST
  - Description: Add a dog for a user.
  - Controller Method: `createDog`

- **Get Dogs**
  - URL: `/api/dogs`
  - Method: GET
  - Description: Get all dogs for a user.
  - Controller Method: `getDogs`

- **Update Dog**
  - URL: `/api/dogs/:id`
  - Method: PUT
  - Description: Update a dog for a user by dog ID.
  - Controller Method: `updateDog`

- **Delete Dog**
  - URL: `/api/dogs/:id`
  - Method: DELETE
  - Description: Delete a dog by a user and dog ID.
  - Controller Method: `deleteDog`

## Team Roles 
- Elijah: Frontend, Git Guru
- Matt: Frontend, Fullstack
- Devin: Team Lead, Fullstack
- Mike: Authentication, Fullstack
 
 ## To Conclude 
 "DogFriends" is a fantastic social networking app designed exclusively for dog lovers. It provides a platform for connecting with like-minded individuals, sharing memorable moments with your furry companions, exploring dog-related content, discovering events and meetups, and much more. With its user-friendly interface and modern technologies, "DogFriends" offers a delightful experience for dog enthusiasts worldwide. Join the vibrant community of dog lovers and embark on an incredible dog-centric journey with "DogFriends" today!

