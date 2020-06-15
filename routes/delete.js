// dependencies
const express = require('express');
const router = express.Router();
const depositModel = require('../models/deposit.js');

// routes
router.delete('/:depositId', (request, response)=>{
    depositModel.deleteOne({
        _id : request.params.depositId
    },(err)=>{
        if(err){
            // Problems encountered when removing the deposit
            console.log('ERROR ' + err);
            response.status(500).json({message: 'Problems encountered with removing the deposit'})
        } else {
            // Everything is working
            console.log('The deposit was removed from database');
            response.status(200).json({message: 'The deposit was removed from database'});
        }
    });
});

// exporting the content of this file
module.exports = router;
