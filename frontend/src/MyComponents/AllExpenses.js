import React from 'react'
import ExpenseItem from './Expense'

function ExpensesView(props) {
        return (
            <div>
                    <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Date</th>
      <th scope="col">Category</th>
      <th scope="col">Amount</th>
      <th scope="col">   </th>

    </tr>
  </thead>
  <tbody>
  {props.expenseList.map((expense) => {
                        return <ExpenseItem expense={expense} />
                    } )}
          </tbody>
          </table>
                
            </div>
        )
    }

export default ExpensesView