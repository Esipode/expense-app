import TableHeader from 'components/table/tableHeader'
import TableBody from 'components/table/tableBody'

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
