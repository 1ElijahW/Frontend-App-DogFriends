Dog Friends - A social media app for your dog

Technologies Used: React Javascript Node.js Express.js MongoDB HTML/CSS

Screenshots:

Login

Home

Profile

New Posts

Settings

☐ Getting Started: You can access the deployed version of TravelApp here.

☐ To get started with Dog Friends, follow these steps:

1. Register a new account by clicking on the 'Signup' button on the homepage. 

2. Once registered, you can log in by clicking on the 'Login' button and entering your credentials.

3. After logging in, you will be taken to the home page where you can see posts by the Dogs.

4. You can navigate to different parts of the application using the sidebar. Here you can create a new post, view your profile, log out, learn about the app, and access settings.

5. On your profile page, you can see information related to your account and your dogs. You can add a new dog to your profile by using the 'Add New Dog' feature.

6. If you want to create a new post, you can do so by clicking the 'New Post' button on the sidebar. This will take you to a new post page where you can enter the title and content of your post.

7. Remember to log out when you're done by clicking the 'Logout' button on the sidebar.

Please make sure to remember your credentials as you will need them to access your account and interact with the Dog Friends community.


☐ Planned Future Enhancements

1. **Dog Matching Algorithm**: We plan to implement a matching algorithm that pairs users based on the compatibility of their dogs, taking into account factors like breed, age, and personality traits.

2. **Interactive Map**: We're aiming to integrate an interactive map feature, where users can find and interact with other dog owners in their vicinity.

3. **Advanced Search and Filters**: We aim to improve the post search functionality by adding advanced filters. Users will be able to search for posts based on specific criteria like breed, location, or dog age.

4. **Enhanced Profile Customization**: We're looking to provide more options for users to customize their profiles, including the ability to add multiple photos of their dogs, customize profile layouts, and more.

Remember to check back often for updates and feel free to provide feedback or suggestions!

## API Routes

### User Routes

☐ **Register User** 
URL: `/users/register` 
Method: POST 
Description: Register a new user. 
Controller Method: `registerUser`

☐ **Login User** 
URL: `/users/login` 
Method: POST 
Description: Login an existing user. 
Controller Method: `loginUser`

☐ **Update Password** 
URL: `/users/:username/updatePassword` 
Method: PUT 
Description: Update the password of a user. 
Controller Method: `updatePassword`

☐ **Get User** 
URL: `/users/:username` 
Method: GET 
Description: Get user information by username. 
Controller Method: `getUser`

☐ **Update Username** 
URL: `/users/:username/updateUsername` 
Method: PUT 
Description: Update the username of a user. 
Controller Method: `updateUsername`

☐ **Update Email** 
URL: `/users/:username/updateEmail` 
Method: PUT 
Description: Update the email of a user. 
Controller Method: `updateEmail`

### Post Routes

☐ **Create Post** 
URL: `/posts/create` 
Method: POST 
Description: Create a new post. 
Controller Method: `createPost`

☐ **Get Posts** 
URL: `/posts/:username` 
Method: GET 
Description: Get all posts by a user. 
Controller Method: `getPosts`

☐ **Update Post** 
URL: `/posts/:username/:postId` 
Method: PUT 
Description: Update a post by a user and post ID. 
Controller Method: `updatePost`

☐ **Delete Post** 
URL: `/posts/:username/:postId` 
Method: DELETE 
Description: Delete a post by a user and post ID. 
Controller Method: `deletePost`

### Dog Routes

☐ **Add Dog** 
URL: `/dogs/:username/addDog` 
Method: POST 
Description: Add a dog for a user. 
Controller Method: `addDog`

☐ **Get Dogs** 
URL: `/dogs/:username` 
Method: GET 
Description: Get all dogs for a user. 
Controller Method: `getDogs`

☐ **Update Dog** 
URL: `/dogs/:username/:dogId` 
Method: PUT 
Description: Update a dog for a user by dog ID. 
Controller Method: `updateDog`

☐ **Delete Dog** 
URL: `/dogs/:username/:dogId` 
Method: DELETE 
Description: Delete a dog by a user and dog ID. 
Controller Method: `deleteDog`


//Insert images for models here//