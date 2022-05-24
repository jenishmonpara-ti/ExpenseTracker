import React, { useState, useEffect } from 'react';
import DatePicker from 'react-date-picker';
import axios from 'axios'
import AllExpenses from './AllExpenses'

const AddExpense = () => {

  const [amount,setAmount] = useState(0)
  const [category, setCategory] = useState('food')
  const [date, onChange] = useState('2022-05-25');
  const [expenseList, setExpenseList] = useState([{  "_id": {    "$oid": "628d55e894a81ac0961a291a"  },  "expenseID": 13,  "date": "2022-05-25",  "category": "stgfegring",  "amount": 50}])

  // Post a todo
  const addExpenseHandler = () => {
    console.log(date)
    axios.post('http://localhost:8000/api/expense/', {'expenseID' : -1 , 'date' : String(date), 'category': category, 'amount' : amount })
      .then(res => console.log(res))
  };

  useEffect(() => {
    axios.get('http://localhost:8000/api/expenses')
      .then(res => {
        setExpenseList(res.data)
      })
  });

  return (
<div className="card-body mb-4">
    <h5 className="card text-white bg-dark mb-3 ">Add Expense</h5>
      <span className="card-text"> 
        Date : <br/>
        <DatePicker className="mb-2 form-control dateIn" onChange={onChange} value={date} />
        <input type = 'number' className="mb-2 form-control titleIn" value = {amount} onChange={event => setAmount(event.target.value)} placeholder='Amount'/> 
        <input type = 'text' className="mb-2 form-control desIn" value = {category} onChange={event => setCategory(event.target.value)}   placeholder='Category'/>

        <button className="btn btn-outline-primary mx-2 mb-3" style={{'borderRadius':'50px',"font-weight":"bold"}}  onClick={addExpenseHandler}>Add Expense</button>
      </span>
<br/>
<br/>
<br/>
<br/>

      <h5 className="card text-white bg-dark mb-3 ">All Expenses</h5>
      <AllExpenses expenseList = {expenseList}/>
</div>
  )
}

export default AddExpense
