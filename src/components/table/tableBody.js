import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { currency } from 'helpers';
import { updateTable } from 'reducer';
import DataButtons from 'components/table/dataButtons';

/**
 * Expense table body
 * @component
 */
function TableBody() {
  const dispatch = useDispatch();
  /** 
   * Array of expenses 
   * @param {Array} - Expenses array
  */
  const data = useSelector(state => state.data);
  /** 
   * Index of expense currently being edited
   * @type {number}
  */
  const [editIndex, setEditing] = useState(null);

/**
 * Keeps number range and format valid
 * @param {number} num - float value to be handled
 * @returns {number|string} - Converted value
 */
  const handleNumber = (num) => {
    if (!num.length) {
      return ''
    }
    const roundDown = Math.floor((num) * 100) / 100;
    const removeDecimals = parseFloat((roundDown).toFixed(2));
    return removeDecimals;
  }

  // const removeLeadingZero = Number(num.toString().replace(/^0+/, ''));
  //   const roundDown = Math.floor((removeLeadingZero) * 100) / 100;
  //   const removeDecimals = parseFloat((roundDown).toFixed(2));

/** 
 * Updates expense property
 * @param {Object} prop - Property of expense being updated
 * @param {number} index - Index of expense in stored array in redux
 */
  const updateProp = (prop, index) => {
    let tempData = [...data];
    tempData[index] = {...tempData[index], ...prop}
    dispatch(updateTable(tempData))
  }
  /** 
   * Prevents decimals over 2 digits
   * @type {Object}
  */

  return (
    <tbody>
      {data.map((row, index) => {
        const { description, amount, date} = row;
        return (
          <tr key={index}>
            <td>
              <input
                required
                value={description}
                disabled={editIndex !== index}
                onChange={(e) => updateProp({description: e.target.value}, index)}
              />
            </td>
            <td>
              $<input
                required
                type="number"
                step={0.01}
                className="include-dollar"
                value={amount}
                disabled={editIndex !== index}
                onChange={(e) => updateProp(
                  {amount: handleNumber(e.target.value)},
                  index
                )}
              />
            </td>
            <td>{currency.format(amount * 0.15)}</td>
            <td>
              <input
                required
                type="datetime-local"
                value={date.substring(0, 16)}
                disabled={editIndex !== index}
                onChange={(e) => updateProp({date: e.target.value}, index)}
              />
            </td>
            <DataButtons
              data={row}
              editIndex={editIndex}
              setEditing={setEditing}
              index={index}
            />
          </tr>
        )
      })}
    
    </tbody>
  );
}

export default TableBody;
