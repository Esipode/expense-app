import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateTable } from "./reducer";
import "./scss/App.scss";
import ExpenseWrapper from "./components/expenseWrapper"
import { getExpenses } from "./helpers";


/**
 * Container for entire application
 * @component
 */
function App() {
  const dispatch = useDispatch();

  useEffect(() => getExpenses()
    .then(data => dispatch(updateTable(data))),
  [dispatch])

  return (
    <div className="app">
      <ExpenseWrapper />
    </div>
  );
}

export default App;
