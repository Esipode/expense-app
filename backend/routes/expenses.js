/** 
 * Express routes
 * @module server/routes
 * @requires router
 * @requires Expense
 */

const router = require('express').Router();
let Expense = require('../models/expenses.model');

/**
 * Gets expenses data
 * @returns {Array} - List of expenses
 */
router.route("/").get((req, res) => {
    Expense.find()
        .then(expenses => res.json(expenses))
        .catch(err => res.status(400).json("Error: " + err))
})

/**
 * Adds new expense
 * @param {string} path - /add
 * @returns {Object} - Expense with new id property
 */
router.route('/add').post((req, res) => {
    const newExpense = new Expense({ ...req.body });

    newExpense.save()
        .then(data => res.json(data))
        .catch(err => res.status(400).json("Error: " + err))
})

/**
 * Deletes expense
 * @param {string} path - /:id
 * @returns {string} - Deleted expense message
 */
router.route('/:id').delete((req, res) => {
    Expense.findByIdAndDelete(req.params.id)
        .then(() => res.json('Expense deleted!'))
        .catch(err => res.status(400).json("Error: " + err))
})

/**
 * Updates expense
 * @param {string} path - /update/:id
 * @returns {string} - Updated expense message
 */
router.route('/update/:id').post((req, res) => {
    Expense.findById(req.params.id)
        .then(expense => {
            expense.description = req.body.description;
            expense.amount = req.body.amount;
            expense.date = req.body.date;
            expense.save()
                .then(() => res.json('Expense updated!'))
                .catch(err => res.status(400).json("Error: " + err))
        })
})

module.exports = router;