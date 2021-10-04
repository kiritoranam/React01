import React, { useState } from 'react';

import Card from "../UI/card";
import './expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
const Expenses = (name) => {
        const [filteredYear, setFilteredYear] = useState('2020');
      
        const filterChangeHandler = selectedYear => {
          setFilteredYear(selectedYear);
        };
        const filteredExpenses = name.items.filter((expense) => {
          return expense.date.getFullYear().toString() === filteredYear;
        });
    return (
      <div>
        <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses={filteredExpenses} /> 
        <ExpensesList items={filteredExpenses} />
          </Card>
      </div> 
     );

};

export default Expenses;