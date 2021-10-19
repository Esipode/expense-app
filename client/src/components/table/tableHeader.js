/**
 * Expense table header
 * @component
 */
function TableHeader() {
    return (
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Taxes (15%)</th>
            <th>Date</th>
          </tr>
        </thead>
    );
  }
  
  export default TableHeader;
  