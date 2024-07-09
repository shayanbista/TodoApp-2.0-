Running it on your own machine:

pull the docker image using: docker pull shayanbista786/todo:1.0

run the image using your own .env file (contents of the env are in .env.example), run command : docker run -p 3000:3000 shayanbista786/todo:1.0

use Postman(or your choice of HTTP client) to run CRUD on todo tasks.


Executing:

use GET '/todo'  to get all the tasks.

use GET '/todo/:id' to get the task of that id.

use POST '/todo' to create a task by parsing a JSON with the title and status of the task. note: status is an enum of "not started", "pending" and "done", anything else will result in an error in the API.

use PUT '/todo/:id' to update that task.

use DELETE '/todo/:id' to delete that task.
