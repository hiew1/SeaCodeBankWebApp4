// dependencies
const express = require('express');
const router = express.Router();
const depositModel = require('../models/deposit.js');

// routes
router.post('/', (request, response)=>{
    const input = request.body;
    const newDocument = new depositModel({
        adminName : input.adminName,
        customerName : input.customerName,
        customerAddress : input.customerAddress,
        items : input.items,
        finalTotal : input.finalTotal,
        terms : input.terms,
        depositDescription : input.depositDescription
    });

    // Saving the information inside the database
    newDocument.save((err, doc)=>{
        if(err) {
            // Something went wrong
            console.log('ERROR ' + err);
            response.status(500).json({message: 'Problems encountered when saving the information. '});
        } else {
            // Everything is ok
            console.log('The deposit record was created successfully');
            response.status(200).json({message: 'The deposit was saved successfully'});
        }
    });
});

// exporting the content of this file
module.exports = router;
