import TableHeader from './table/tableHeader'
import TableBody from './table/tableBody'

/**
 * Container for table components
 * @component
 */
function Table() {
  return (
    <table>
      <TableHeader />
      <TableBody />
    </table>
  );
}

export default Table;
