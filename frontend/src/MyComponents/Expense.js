import axios from 'axios'
import React from 'react'

function ExpenseItem(props) {
    function deleteExpenseHandler(expenseID) {
        axios.delete(`http://localhost:8000/api/expense${expenseID}`)
            .then(res => console.log(res.data)
            )
    };

    return (
        <tr>
            <td>{props.expense.date}</td>
            <td>{props.expense.category}</td>
            <td>{props.expense.amount}</td>
            <button onClick={() => deleteExpenseHandler(props.expense.expenseID)} className="btn btn-outline-danger my-2 mx-2" style={{ 'borderRadius': '50px', }}>Delete</button>
        </tr>
        //     <div>
        //         <p>
        //             <span style={{ fontWeight: 'bold, underline' }}>{props.expense.date}   :       {props.expense.expenseID}      :        </span>      {props.expense.amount}
        //             <button onClick={() => deleteExpenseHandler(props.expense.expenseID)} className="btn btn-outline-danger my-2 mx-2" style={{'borderRadius':'50px',}}>Delete</button>
        //             <hr></hr>
        //         </p>
        //     </div>
    )
}

export default ExpenseItem;