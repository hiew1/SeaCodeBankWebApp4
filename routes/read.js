// dependencies
const express = require('express');
const router = express.Router();
const depositModel = require('../models/deposit.js');

// routes
router.get('/all', (request, response)=>{
    depositModel.find((err, docs)=>{
        if(err){
            console.log('ERROR '+ err);
            response.status(500).json({message: 'Problems encountered when reading the information'})
        } else {
            // everything is working
            console.log('All the deposits were found.');
            response.status(200).json(docs);
        }
    });
});

router.get('/:depositId',(request,response)=>{
    depositModel.findOne({
        _id : request.params.depositId
    },(err, deposit)=>{
        if(err){
            // something went wrong
            console.log('ERROR '+ err);
            response.status(500).json({message: 'Problems when reading the deposit.'});
        } else {
            // everything is working
            console.log('The deposit was found.');
            response.status(200).json(deposit);
        }
    });
});

// exporting the content of this file
module.exports = router;
