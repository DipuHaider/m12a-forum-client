# Forum Application using MERN Stack

This is a full-stack web application developed using the MERN (MongoDB, Express.js, React, Node.js) stack. The application serves as an online platform where users can engage in discussions by posting messages.

## Main Tasks

### Make the homepage responsive for mobile, tablet, and desktop

1. **Navbar:**

   - Displays logo + website name, Home, Membership, Notification icon, and Join US (when not logged in) button.
   - If logged in, the user's profile picture appears with a dropdown menu containing User name (not clickable), Dashboard, and Logout button.

2. **Banner Section:**

   - Contains a search bar based on post tags.
   - Search functionality is implemented in the backend.
   - Beautification of the search section is applied.

3. **Tags Section:**

   - Lists all available tags for posts, allowing users to search using tags.

4. **Announcement Section:**

   - Displays announcements, and the notification icon shows the announcement count.
   - The count is stored in a collection to track announcements.

5. **Default Post Display:**

   - Displays all posts on the homepage from newest to oldest.
   - Each post includes author image, post title, tags, time, comments count, and votes count.

6. **Sort by Popularity:**
   - Implements a button to sort posts by popularity based on total vote counts (UpVote - DownVote).
   - Paginates the home page with 5 posts per page.

### Post Details Page (`/post/${_id}`)

1. Displays:

   - Author image
   - Author name
   - Post title
   - Post description
   - Tag
   - Post time
   - Comment button
   - UpVote icon
   - DownVote icon
   - Share button

2. Comment Section:
   - Requires user login to make comments, give votes (upvote/downvote), and share posts.
   - Uses the react-share package for share functionality.

### Membership Page (Private Route)

- Payment page where users pay to become a member and receive a Gold badge.
- Members can make more than 5 posts.

### User Dashboard (Private Route)

1. **My Profile:**

   - Displays user's name, image, email, badges, and 3 recent posts.
   - Shows Bronze Badge for registration and Gold Badge for membership.

2. **Add Post:**

   - Form with fields for post details.
   - Normal users can add up to 5 posts; exceeding the limit shows a "Become a Member" button.

3. **My Posts:**
   - Displays all posts made by the user in a tabular form.

### Join Us Page (Authentication Page)

- Login form with a link to the Register page.
- Includes at least one social login in both Join Us and Register pages.
- Gives necessary badges to users when joining the forum for the first time.

### Admin Dashboard (Private Route)

1. **Manage Users:**

   - Displays all users in a tabular form.
   - Allows making a user an admin.

2. **Reported Activities/Comments:**

   - Shows reported comments with necessary information.
   - Implements admin functions to address reports.

3. **Make Announcement:**
   - Form to make announcements displayed on the homepage.

### Bonus Tasks

1. **Admin Profile:**

   - Displays admin's name, image, email, number of posts, comments, and users.
   - Includes a pie chart showing total posts, comments, and users.

2. **JWT on Login:**
   - Implements JWT on login and stores the token.

### Optional Tasks (Select 2)

1. **Youtube-like Upvote/Downvote:**

   - User can either upvote or downvote a post, not both.

2. **About Me Section:**

   - Users can add/edit an About Me section on their profile page.

3. **React-awesome-button and React-select:**

   - Implements these packages in the application.

4. **Change Post Visibility:**

   - Allows users to change the visibility of their posts on the My Posts page.

5. **Axios Interceptor:**

   - Implements Axios interceptor.

6. **Banner Section with Background Picture:**
   - Adds a background picture and popular search words in the banner section.
