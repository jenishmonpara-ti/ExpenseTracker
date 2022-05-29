import axios from "axios";
import React, { useEffect, useState } from "react";

const ExpenseSplitView = () => {

        const [expenseSplitList, setSplitList] = useState([{ 'category': "category", amount: 40 }])

        useEffect(() => {
                axios.get('http://localhost:8000/api/expensesplit')
                        .then(
                                res => {
                                        setSplitList(res.data)
                                }
                        )
        });

        return (
                <>
                        <div>
                                <h5 className="card text-white bg-dark mb-3 ">Expense Split</h5>

                                <table class="table table-striped">
                                        <thead>
                                                <tr>
                                                        <th scope="col">Category</th>
                                                        <th scope="col">Amount</th>
                                                </tr>
                                        </thead>
                                        <tbody>
                                                {expenseSplitList.map((expenseCategory) => {
                                                        return (
                                                                <>
                                                                        <tr>
                                                                                <td>
                                                                                        {expenseCategory.category}
                                                                                </td>
                                                                                <td>
                                                                                        {expenseCategory.amount}
                                                                                </td>
                                                                        </tr>
                                                                </>
                                                        );

                                                })}
                                        </tbody>
                                </table>

                        </div>
                </>
        )
}

export default ExpenseSplitView