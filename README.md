# Pitch deck backend
- Uses Node.js and express to create a simple server with two routes. Performing a post request to */api/pitches* saves the file locally, and then forwards a post request to an amazon s3 bucket.
- File is saved locally using the [multer](https://www.npmjs.com/package/multer) library. 
- Once the upload is successfull, api sends a link to display the uploaded pdf
- [Front-end repo](https://github.com/sebastian-espeset/pitch-deck-frontend.git) 

## Scripts
- **start**: Starts the server.
- **watch:dev**: Runs the server with Nodemon.

## Known bugs
- Attempts to host this on heroku have been unsuccessful. Unfortunately that means that users will have a difficult time demoing this. It works locally, but it's hitting a 500 error when front end attempts to hit a heroku url.
- Multer attaches the posted file to the request body. I believe the issue with the api behaving poorly on heroku is coming up because multer is attempting to save the formdata locally, and that folder doesn't exist on heroku. 



