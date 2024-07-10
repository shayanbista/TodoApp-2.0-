Executing:

use POST '/users' to add a new user.

use POST '/auth/login' to log in and get the access token.

use GET '/users' and use that access token as a bearer to view all the users and the tasks. note: you can run CRUD on tasks from here as well.

use POST '/auth/refresh-token' and pass the refresh token to get a new access token and refresh token.

