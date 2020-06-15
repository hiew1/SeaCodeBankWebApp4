// dependencies
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// static web server
app.use(express.static(path.join(__dirname, 'dist')));

// connection to MongoDB
mongoose.connect('mongodb+srv://dbUser:2TYVMZe)pRgc=f6@seacodebankwebapp4-5tud9.gcp.mongodb.net/dbUser?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('error',(error)=>{
    console.log('ERROR '+ error);
});

mongoose.connection.once('open',()=>{
    console.log('The connection to MongoDB Atlas is working');
});

// Body Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// REST API
app.use('/api/create', require('./routes/create.js'));
app.use('/api/read', require('./routes/read.js'));
app.use('/api/update', require('./routes/update.js'));
app.use('/api/delete', require('./routes/delete.js'));
app.get('*',(request, response )=>{
    response.sendFile(path.join(__dirname,'dist/transactions.html'));
});

// port
app.listen(3000, ()=>{
    console.log('Listening at localhost: 3000');
});