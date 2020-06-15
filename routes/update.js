// dependencies
const express = require('express');
const router = express.Router();
const depositModel = require('../models/deposit.js');

// routes
router.put('/:depositId', (request, response)=>{
    const input = request.body;

    depositModel.updateOne({
        _id : request.params.depositId
    }, {
        adminName : input.adminName,
        customerName : input.customerName,
        customerAddress : input.customerAddress,
        items : input.items,
        finalTotal : input.finalTotal,
        terms : input.terms,
        depositDescription : input.depositDescription
    },(err, result)=>{
        if(err){
            // Problems when updating the information
            console.log('ERROR '+ err);
            response.status(500).json({message: 'Problems when updating the information'})
        } else {
            // Everything is working
            console.log('The deposit was updated.');
            response.status(200).json({message:'The deposit was updated successfully'})
        }
    });
});

// exporting the content of this file
module.exports = router;
