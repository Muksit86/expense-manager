// rrd imports
import { Link, useFetcher } from "react-router-dom";

// library import
import { TrashIcon } from "@heroicons/react/24/solid";

// helper imports
import {
  fetchBudget,
  formatCurrency,
  formatDateToLocaleString,
  getAllMatchingItems,
} from "../helpers";


const ExpenseItem = ({ expense, showBudget }) => {
  const fetcher = useFetcher();

  return (
    <>
      <td>{expense.expenseTitle}</td>
      <td>{formatCurrency(expense.expenseAmount)}</td>
      <td>{formatDateToLocaleString(expense.createdAt)}</td>
      {showBudget && (
        <td>
          <Link
            to={`/budget/${expense.budgetId}`}
            //style={{ "--accent": budget.color }}
          >
            {expense.budgetTitle}
          </Link>{" "}
        </td>
      )}
      <td>
        <fetcher.Form method="post">
          <input type="hidden" name="_action" value="deleteExpense" />
          <input type="hidden" name="expenseId" value={expense._id} />
          <button
            type="submit"
            className="btn btn--warning"
            aria-label={`Delete ${expense.name} expense`}
          >
            <TrashIcon width={20} />
          </button>
        </fetcher.Form>
      </td>
    </>
  );
};
export default ExpenseItem;
