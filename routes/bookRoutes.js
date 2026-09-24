const express = require("express");
const Book = require("../models/Book");
const router = express.Router();

// ====================================================== 
// CREATE - Create a new book 
// POST /api/books 
// ======================================================
router.post('/', async(req, res) => { 
    try{
        const book = await Book.create(req.body);

        res.status(200).json({
            success: true,
            message: "Book created successfully.",
            book
        });
    
    
    }catch(error){
        console.error(error);
        res.status(500).json({
            success: false,
            message: error.message,
            error_code: "INTERNAL_SERVER_ERROR"
        });
    }
}); 

// ====================================================== 
// READ ALL - Get all books
// GET /api/books
// ======================================================
router.get('/', async(req, res) => {
    try{
        const books = await Book.find({});
        res.status(200).json({
            success: true,
            books
        });
    }catch(error){
        console.error(error);
        res.status(500).json({
            success: false,
             message: error.message,
             error_code: "INTERNAL_SERVER_ERROR"
        });
    }

 }); 

// ======================================================
// READ ONE - Get a single book by ID 
// GET /api/books/:id 
// ======================================================
router.get('/:id', async(req, res) => {
    try{
        const {id } =req.params;
        const book = await Book.findById(id);

        // Not Found
        if (!book) { 
            return res.status(404).json({
                 success: false, 
                 message: "Book not found.",
                  error_code: "BOOK_NOT_FOUND", 
            });
        }

        res.status(200).json({
            success: true,
            book
        });
    }catch(error){
        console.error(error);
        res.status(500).json({
            success: false,
             message: error.message,
             error_code: "INTERNAL_SERVER_ERROR"
        });
    }
 }); 

// ====================================================== 
// UPDATE - Update a book by ID 
// PUT /api/books/:id
// ======================================================
router.put('/:id', async(req, res) => { 
     try{
        const { id } = req.params;
        const book = await Book.findByIdAndUpdate(
             id, req.body, 
            {    new: true,
                 runValidators: true, 
            });
            
        if (!book) {
             return res.status(404).json({
                 success: false, 
                 message: "Book not found.", 
                 error_code: "BOOK_NOT_FOUND",
                 });
            } 
            
        res.status(200).json({ 
            success: true,
            message: "Book updated successfully.", 
            book,
         });

    }catch(error){
        console.error(error);
        res.status(500).json({
            success: false,
             message: error.message,
             error_code: "INTERNAL_SERVER_ERROR"
        });
    }
}); 

// ====================================================== 
// DELETE - Delete a book by ID 
// DELETE /api/books/:id 
// ======================================================
router.delete('/:id', async(req, res) => {
    try { 
        const { id } = req.params; 
        const book = await Book.findByIdAndDelete(id);
        
        if (!book) {
            return res.status(404).json({
                success: false,
                message: "Book not found.",
                error_code: "BOOK_NOT_FOUND",
            }); 
        }
        
        res.status(200).json({ 
            success: true,
            message: "Book deleted successfully.",
            book,
        }); 
    }
    catch(error){
        console.error(error);
        res.status(500).json({
            success: false,
             message: error.message,
             error_code: "INTERNAL_SERVER_ERROR"
        });
    }
 }); 

module.exports = router;



