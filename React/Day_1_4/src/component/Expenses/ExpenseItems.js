import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/card';
import './ExpenseItems.css';

const ExpenseItem = (name) => {
  // function clickHandler() {}
  const [title, setTitle] = useState(name.title);
  console.log('ExpenseItem evaluated by React');
  
  const clickHandler = () => {
    setTitle('Updated!');
    console.log(title);
  };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={name.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${name.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;