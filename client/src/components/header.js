import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTable } from '../reducer';
import { currency } from '../helpers';

/**
 * App header and expense add button
 * @component
 */
function Header() {
  /** 
   * Array of expenses 
   * @param {Array} - Expenses array
  */
  const tableData = useSelector(state => state.data);
  const dispatch = useDispatch();

  /** 
   * Append table data with new expense 
   * @returns {Array} - Array of expenses with newly created expense appended
  */
  const addRow = () => {
    return [
      ...tableData,
      {
        description: 'Desc',
        amount: 0,
        date: (new Date()).toISOString()
      }
    ]
  }

  /**  
   * Calculates total without tax from each expense
   * @returns {number} - Total combined value of expenses
  */
  const subtotal = useMemo(() => {
    if (tableData.length) {
      const values = tableData.map(item => item.amount)
      return values.reduce((total, current) => total + current)
    }
    else return 0;
  }, [tableData])

  return (
    <header>
      <h1 className="title">Expense Tracker</h1>
      <h3 className="subtotal">The sub-total of expenses is
        <span> {currency.format(subtotal)}</span>
      </h3>
      <h3 className="total">The total with taxes is 
        <span> {currency.format(subtotal * 1.15)}</span>
      </h3>
      <button onClick={() => dispatch(updateTable(addRow()))}>Add new expense</button>
    </header>
  );
}

export default Header;
