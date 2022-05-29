import React, { useState, useEffect } from 'react';
import ExpenseItem from './Expense'
import axios from 'axios'



export default function ExpensesView() {
	const [expenseList, setExpenseList] = useState([{ "_id": { "$oid": "628d55e894a81ac0961a291a" }, "expenseID": 13, "date": "2022-05-25", "category": "stgfegring", "amount": 50 }])
	useEffect(() => {
		axios.get('http://localhost:8000/api/expenses')
			.then(res => {
				setExpenseList(res.data)
				// console.log(res.data)

			})
	});

	<h5 className="card text-white bg-dark mb-3 ">All Expenses</h5>

	return (
		<div>

		<h5 className="card text-white bg-dark mb-3 ">All Expenses</h5>

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
					{expenseList.map((expense) => {
						return <ExpenseItem expense={expense} />
					})}
				</tbody>
			</table>

		</div>
	)
}

