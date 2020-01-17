const express = require('express');
const mongoose = require('mongoose');
const config = require('config');

const app = express();

app.use(express.json());

//DB config
const db = config.get('mongoURI');

mongoose
    .connect(db, {
        useNewUrlParser:true,
        useCreateIndex:true,
        useUnifiedTopology: true
    })
    .then( () => console.log("MongoDB is working"))
    .catch( err => console.log(err, "Something is wrong"));


//USE routes
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/comments', require('./routes/api/comments'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));


const port = process.env.PORT || 5001;

app.listen(port, () => console.log(`Server is running on port ${port}`));