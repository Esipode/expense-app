/**
 * Converts floats into currency strings
 * @type {object}
 */
export const currency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
});

/**
 * Root URL based on whether or not the project is in production
 * @type {string}
 */
const rootUrl = process.env.NODE_ENV === "development" ? "http://localhost:5000/" : "/"

/**
 * Fetch list of expenses from server
 * 
 * @returns {Object[]}
 */
export const getExpenses = async () => 
    fetch(rootUrl + "expenses")
        .then(res => res.json())
        .then(data => data)

/**
 * Information about the expense
 * @typedef {Object} Expense
 * @property {number} amount - Dollar amount of expense
 * @property {string} date - Date expense created
 * @property {string} description - Explanation of expense
 */

/**
 * Returns updated expense values
 * 
 * @param {Expense} data - Expense to be added
 * @returns {Object} - The expense added with assigned id property
 */
export const addExpense = async (data) => 
    fetch(rootUrl + "expenses/add", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then((res) => res.json())
    .then(data => data)

/**
 * Returns updated expense values
 * 
 * @param {Expense} data - Expense to be added
 * @returns {string} - Confirmation message of update status
 */
export const updateExpense = async (data) => 
    fetch(rootUrl + "expenses/update/" + data._id, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

/**
 * Returns updated expense values
 * 
 * @param {string} id - unique generated string referencing expense
 * @returns {string} - Confirmation message of expense deletion
 */
export const deleteExpense = async (id) => 
    fetch(rootUrl + "expenses/" + id, {
        method: "DELETE",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
    })