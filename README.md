# Mock Pup DB

All of the dog data is stored in the `db.json` file. You'll want to access this data
using a json server. In order to do this, run `$ npm install -g json-server` and
then `$ json-server --watch db.json`.

This will setup the data on a server using restful routes at http://localhost:3000/pups.
Go ahead and head to that url in your browser to view the data.
Familiarize yourself with the attributes for each pup. Try going to `/pups/:id` to see an individual pup as well.

## Deliverables

1. Get the data from the server and render all puppy names ONLY in the PuppyContainer
2. Clicking on a puppy will display the puppy details in the PuppyDetails
3. Update the dog to toggle whether the dog is good/bad
4. Search by name and/or by breed
5. Filter to render all the dogs or only show the good dogs

## Bonus

6. Add a new pup and pessimistically add it to all the pups
7. Edit/Delete a particular pup to the backend server (live update the name shown in the display details 4 funz)
8. Add a sort by alphabetical
9. Toggle all dogs to good or bad
10. Toggle puppy details to be hidden or displayed
# Mock_pub_db
