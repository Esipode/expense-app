import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTable } from "../../reducer";
import { addExpense, deleteExpense, updateExpense } from "../../helpers";

/**
 * Expense table body
 * @component
 * @param {Object} data - Properties of expense
 * @param {number|null} editIndex - Index of expense being actively edited
 * @param {Object} setEditing - Sets actively edited expense
 * @param {number} index  - index of expense in array
 */
function DataButtons({ data, editIndex, setEditing, index }) {
/** 
 * Array of expenses 
 * @param {Array} - Expenses array
 */
  const tableData = useSelector(state => state.data)
  const dispatch = useDispatch();

/**
 * Unique ID of the expense
 * @type {string}
 */
  const { _id } = data;

/**
 * Checks for empty values in expense inputs
 * @returns {boolean} - Verifies if an input field has been left empty
 */
  const fieldEmpty = useMemo(() => {
    const { description, amount, date } = tableData[index];
    return !description.length || (isNaN(amount) || typeof amount !== 'number') || isNaN(new Date(date).getTime())
  }, [tableData, index])

/** Deletes expense from table */
  const deleteRow = () => {
    const tempData = [...tableData];
    tempData.splice(index, 1);
    dispatch(updateTable(tempData));
  }

/**
 * Updates expense with ID property after being added
 * @param {string} id - unique id of the expense
 */
  const setId = (id) => {
    const tempData = [...tableData];
    tempData[index]._id = id;
    dispatch(updateTable(tempData));
  }

  return (
    <td className="btn-wrapper" align="right">
      {editIndex !== null && index === editIndex ?
        <button 
          className="update-btn" 
          onClick={() => {
            setEditing(null);
            _id && updateExpense(data);
            !_id && addExpense(data)
              .then(res => setId(res._id))
          }} 
          disabled={fieldEmpty}
        >
          Update
        </button>
      : ""}
      {editIndex === null || index !== editIndex ?
        <button 
          className="edit-btn" 
          onClick={() => setEditing(index)} 
          disabled={editIndex !== null && index !== editIndex}
        >
          Edit
        </button>
       : ""}
      <button 
        className="delete-btn"
        onClick={() => {
          _id && deleteExpense(_id);
          deleteRow();
        }}
        disabled={editIndex !== null && index === editIndex}
      >
        Delete
      </button>
    </td>
  );
}

export default DataButtons;
