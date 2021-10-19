import { useSelector } from 'react-redux';
import Header from 'components/header'
import Table from 'components/table'

/**
 * Form wrapper for expense table
 * @component
 */
function ExpenseWrapper() {
  /** Array of expenses 
   * @param {Array} - Expenses array
  */
  const tableData = useSelector(state => state.data)

  return (
    <form className="expense-wrapper" onSubmit={(e) => e.preventDefault()}>
      <Header />
      {tableData.length ? <Table /> : ''}
    </form>
  );
}

export default ExpenseWrapper;