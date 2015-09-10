### Code Fellows D49 Week 2 Assignment - Create A Simple HTTP Server with Persistence

#### Persistent HTTP Server - Summary
+ This is project creates a simple HTTP server that acts as a data store and responds to GET/POST requests.
+ This server saves POST requests in a JSON format to a data folder (not on this git repo).
+ We use the number of files as the naming convention for the hidden data directory.
+ index.js runs the program.
+ lib/http_server.js represents the server file.
+ We are using [SuperAgent](https://visionmedia.github.io/superagent/#test-documentation) by Vision Media.
+ test/test.js includes a Mocha / Chai tests.
