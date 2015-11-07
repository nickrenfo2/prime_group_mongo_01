# prime_group_mongo_01
The goal of this assignment was to have a browser page that would allow a user to input 'assignments' into Mongo database so that a person could view all submitted assignments. 
We used Angular, MongoDB, Node and Express to accomplish this.
The purpose was to help students understand how to accept user input, and save that into a document database, as well as retrieve that information and display it to the user in a way that makes sense to the viewer.
Additionally, as a group assignment, this also helped solidify our group and teamwork skills, as well as reading, writing, and speaking code.
##Looking Back
Looking back on this assignment, I would likely change how we grabbed user information. The way it is right now, we accept each input individually and put it in an object, when it would be much simpler to just change the ng-model of the item to be part of an object, then send that to the server.