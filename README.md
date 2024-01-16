Description Project: 
This project implements JWT authentication with refresh tokens and access tokens using Prisma and Express.


## Installation
Follow these steps to clone and run the auth-server project:

- First, Open Git Bash or a terminal and run the following command to clone the project:
  git@github.com:eggyyuliandika/authentication.git

- Second, when the cloning process is done, move to the project directory by running the following command:
  cd auth-server

- Install project dependencies using npm:
  npm install


## Run the project
- First, run the following command to start the server:
  npm run dev 

- Second, access the API development tools (such as Postman) at:
  http://localhost:5000


## Send Request 
- POST Request to Register User, and don't forget to provide email and password in the request body.
  http://localhost:5000/api/v1/auth/register

- POST Request to Login User, and don't forget to provide the email and password that have been registered in the request body.
  http://localhost:5000/api/v1/auth/login 

- Get request to get user profile, and don't forget to add an Authorization header with the access token (ACCESS TOKEN EXPIRED IN 5 MINUTES) 
  obtained from the /login endpoint. The format should be "Bearer token."
  http://localhost:5000/api/v1/users/profile