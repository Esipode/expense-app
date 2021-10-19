/** 
 * Express routes
 * @module server/routes
 * @requires mongoose
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * @namespace
 * @property {string} description - Description of expense
 * @property {number} amount - Value of expense
 * @property {date} date - Date expense created
 */
const expenseSchema = new Schema ({
    /** @name description */
    description: {
        type: String,
        required: true,
        trim: true
    },
    /** @name amount */
    amount: {
        type: Number,
        required: true
    },
    /** @name date */
    date: {
        type: String,
        required: true,
        trim: true
    }
})

const Expense = mongoose.model('Expense', expenseSchema)

module.exports = Expense;