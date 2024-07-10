Running it on your own machine:

pull the docker image using: docker pull shayanbista786/todo:2.0

run the image using your own .env file (contents of the env are in .env.example), run command :docker run -p 3000:3000  shayanbista786/todo:2.0


use Postman(or your choice of HTTP client) to use the API.




Executing:

use POST '/users' to add a new user.

use POST '/auth/login' to log in and get the access token.

use GET '/users' and use that access token as a bearer to view all the users and the tasks. note: you can run CRUD on tasks from here as well.

use POST '/auth/refresh-token' and pass the refresh token to get a new access token and refresh token.

