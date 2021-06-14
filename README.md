# Pitch deck backend
- Uses Node.js and express to create a simple server with two routes. Performing a post request to "http://PORT/api/pitches" saves the file locally, and then forwards a post request to an amazon s3 bucket.
- Once the upload is successfull, api sends a link to display the uploaded pdf
- Front-end repo: https://github.com/sebastian-espeset/pitch-deck-frontend.git 

## Scripts
- **start**: Runs the app.
- **watch:dev**: Runs the app with Nodemon.

## Known bugs
- Attempts to host this on heroku have been unsuccessful. Unfortunately that means that user's will have a difficult time demoing this. It works locally, but it's hitting a 500 error when front end attempts to hit a heroku url.



