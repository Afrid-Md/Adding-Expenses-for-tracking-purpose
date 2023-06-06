import ExpenseListContext from "./List-context";
import { useReducer,  } from "react";

const defaultList = {
  Expenses: [],
};

const reducer = (state, action) => {
    if(action.type==='ADD'){
        const updatedItems=state.Expenses.concat(action.expense);

        return{
            Expenses:updatedItems
        }
    }

    if(action.type==='REMOVE'){
        const updatedItems=state.Expenses.filter((expense)=>expense.id!==action.id);

        return{
            Expenses:updatedItems
        }
    }
    return defaultList;
};

function ExpenseListProvider(props) {
  const [list, dispatchList] = useReducer(reducer, defaultList);


  const expenseAddHandler = (expense) => {
    dispatchList({ type: "ADD", expense: expense });
  };


  const expenseRemoveHandler = (id) => {
    dispatchList({ type: "REMOVE", id: id });
  };

  const ExpenseListContextValue = {
    Expenses: list.Expenses,
    addExpense: expenseAddHandler,
    removeExpense: expenseRemoveHandler,
  };

  console.log(ExpenseListContextValue)

  return (
    <ExpenseListContext.Provider value={ExpenseListContextValue}>
      {props.children}
    </ExpenseListContext.Provider>
  );
}

export default ExpenseListProvider;
