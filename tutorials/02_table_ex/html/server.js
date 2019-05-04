const express = require("express")
 
const app = express()
 
app.use(express.static(__dirname))
 
const server = app.listen(8081, function() {
    const port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
})
