import React, {useState} from "react";
import './NewExpense.css';
import Expenseform from "./Expenseform";

const NewExpense = (name) => {
    const [isEditing, setIsEditing] = useState(false);

const saveExpenseDataHandler = (enterExpenseData) => {
    const expenseData = {
        ...enterExpenseData,
        id: Math.random().toString()
    };
    name.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };


    return (
        <div className="new-expense">
            {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <Expenseform
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
        </div>
    );
};

export default NewExpense