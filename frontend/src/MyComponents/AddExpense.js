import React, { useState, useEffect } from 'react';
import DatePicker from 'react-date-picker';
import axios from 'axios'
import AllExpenses from './AllExpenses'

const AddExpense = () => {

  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState('food')
  const [date, setDate] = useState(new Date());

  // Post a todo
  const addExpenseHandler = () => {
    console.log(date)
    axios.post('http://localhost:8000/api/expense/', { 'expenseID': -1, 'date': String(date), 'category': category, 'amount': amount })
      .then(res => console.log(res))
  };

  

  return (
    <div className="card-body mb-4">
      <h5 className="card text-white bg-dark mb-3 ">Add Expense</h5>
      <span className="card-text">
        Date : <br />
        <DatePicker className="mb-2 form-control dateIn" onChange={(date) => { setDate(date) }} value={date} maxDate={new Date()} />
        <input type='number' className="mb-2 form-control titleIn" value={amount} onChange={event => setAmount(event.target.value)} placeholder='Amount' />
        <input type='text' className="mb-2 form-control desIn" value={category} onChange={event => setCategory(event.target.value)} placeholder='Category' />

        <button className="btn btn-outline-primary mx-2 mb-3" style={{ 'borderRadius': '50px', "font-weight": "bold" }} onClick={addExpenseHandler}>Add Expense</button>
      </span>
      

    </div>
  )
}

export default AddExpense
