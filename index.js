const express = require('express');
const port = 8000;
const app = express();
const db = require('./config/mongoose');
const Task = require('./models/tasks');
 
app.use(express.urlencoded());
app.use(express.static('assets'));

app.set('view engine' , 'ejs');
app.set('views' , './views');
app.use('/' , require('./routes'));

app.listen(port , (err) =>{
    if(err) {
        console.log(`Error in running the server ${err}`);
        return;
    }
    console.log(`Server is running on port: ${port}`);
})
