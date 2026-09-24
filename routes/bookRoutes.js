const express = require("express");
const Book = require("../models/Book");
const router = express.Router();

// CREATE
router.post('/', async(req, res) => { }); 

// Read All
router.get('/', async(req, res) => {
    try{
        const books = await Book.find({});
        res.status(200).json({
            success: true,
            data: {books}
        });
    }catch(error){
        console.log(error);
        res.status(500).json({
            success: false,
             message: "Unable to load data due to an internal server error.",
             error_code: "INTERNAL_SERVER_ERROR"
        });
    }

 }); 

// Read One
router.get('/:id', async(req, res) => { }); 

// Update
router.get('/id', async(req, res) => { }); 

// Delete
router.get('/:id', async(req, res) => { }); 

module.exports = router;



