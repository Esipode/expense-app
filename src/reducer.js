/** 
 * Initial state of redux store
 * @type {Object}
 */
const initialState = {
    data: []
}

/** 
 * Action for triggering update of array of expenses
 * @param {Object} data - The updated array of expenses
 * @returns {Object} - Action type and data to be updated
 */
export const updateTable = (data) => ({
    type: 'UPDATE_TABLE',
    payload: data
})

/** 
 * Reducer for updating expenses array
 * @param {Object} state - The current state value
 * @param {Object} action - The type of function to carry out, and data to update
 * @returns {Object} - Updated state values
 */
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_TABLE':
            return {...state, data: action.payload};
        default:
            return {...state};
    }
}

export default reducer