import axios from "axios";
import React, { useEffect, useState } from "react";

const ExpenseSplitView = () => {

        const [splitList,setSplitList] = useState([{'Category' : 100}])

        useEffect( () => {
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
			<table class="table table-striped">
				<thead>
					<tr>
						<th scope="col">Category</th>
						<th scope="col">Amount</th>
					</tr>
				</thead>
				<tbody>
					{expenseSplitList.map((expenseCategory) => {
						<tr>
                                                        <td>
                                                                {expenseCategory.category}
                                                        </td>
                                                        <td>
                                                                {expenseCategory.value}
                                                        </td>
                                                </tr>
					})}
				</tbody>
			</table>

		</div>
                </>
        )
}