# main.py
from datetime import datetime
from urllib import response
from expense_model import Expense
from fastapi import FastAPI,HTTPException
from fastapi.middleware.cors import CORSMiddleware
from database import(
        fetch_all_expenses,
        fetch_one_expense,
        insert_expense,
        update_expense,
        remove_expense
)

app = FastAPI()

origins = ['https://localhost:3000']    # react js port

app.add_middleware(
        CORSMiddleware,
        allow_origins = origins,
        allow_credentials = True,
        allow_methods = ['*'],
        allow_headers = ['*']
)

@app.get("/api/expenses")
async def get_expenses() :
        response = await fetch_all_expenses()
        if response : 
                return response
        raise HTTPException(404)

@app.get("/api/expense{expenseID}")
async def get_expense() :
        response = await fetch_one_expense(expenseID)
        if response : 
                return response
        raise HTTPException(404,f'No expense with expenseID {expenseID}')


@app.post('/api/expense', response_model = Expense)
async def post_record(expense : Expense) : 
        response = await insert_expense(expense.dict()) # type(response) = JSON string
        if response : 
                return response
        raise HTTPException(400,'Something went wrong')


@app.put('/api/expense{expenseID}', response_model = Expense)
async def put_expense(expenseID : int, date : str, category : str, amount : int) :
        response = await update_expense(expenseID, amount)
        if response : 
                return response
        raise HTTPException(404,f'Expense with expenseID {expenseID} not found.')

@app.delete('api/expense{expenseID}', response_model = Expense)
async def delete_expense(expenseID : int) : 
        response = await remove_expense(expenseID)
        if response : 
                return response
        raise HTTPException(404,f'Expense with expenseID {expenseID} not found.')