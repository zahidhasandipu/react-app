import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';


const ExpenseItem = (props) => {
    return (
        <Card className='expense-item'>
          <ExpenseDate date={props.date} />
          <div className='expense-item__description'>
          <h2>{PROPERTY_TYPES.title}</h2>
          <div className='ex[ense-item__price'>${props.amount}</div>
          </div>
          <button>Change Title</button>
          
          </Card>
    // const expenseDate = new Date(2021, 2, 28);
    // const expenseTitle = 'Insurance';
    // const expenseAmount = 458;

    // return (
    //     <div className="expense-item">
    //     <div>{expenseDate.toISOString()}</div>
    //     <div className="expense-item__description">
    //        <h2>{props.title}</h2>
    //        <div className="expense-item__price">${props.amount}</div>
    //        </div>
    //     </div>
        
    );
}

export default ExpenseItem;
