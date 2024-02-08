const express = require('express');
const path = require('path');
const app = express ();
const port = process.env.PORT || 3000; //Use specified port or default to 3000

//Static Middleware
//serve static files from public directory
app.use(express.static('client'));

//serve react build files
app.use(express.static('client/build'));

//Route to homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

//Start server test for the server working
app.listen(port, () => {
    console.log(
        `Server is running on http://localhost:${port} \n
        Click the link to access the server`)
})
