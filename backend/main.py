# main.py
import json
import time
from datetime import datetime
from urllib import response
from models import Expense
from fastapi import FastAPI,HTTPException
from fastapi.middleware.cors import CORSMiddleware
from database import(
        fetch_all_expenses,
        insert_expense,
        remove_expense,
        get_split_db
)

app = FastAPI()
expenseIDItr = 1
import logging
logging.basicConfig(filename = '../logs.log', level = logging.ERROR)

origins = ['https://localhost:3000','localhost:3000']    # react js port

app.add_middleware(
        CORSMiddleware,
        allow_origins = ['*'],
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

@app.get("/api/expensesplit")
async def get_split() : 
        response = await get_split_db()
        if response : 
                return response
        raise HTTPException(404)

@app.post('/api/expense/', response_model = Expense)
async def post_record(expense : Expense) : 
        expense.expenseID = int(time.time())
        response = await insert_expense(expense.dict()) # type(response) = JSON string
        if response : 
                return response
        raise HTTPException(400,'Something went wrong')



@app.delete('/api/expense{expenseID}', response_model = Expense)
async def delete_expense(expenseID : int) : 
        logging.error(f'expenseid : {expenseID}')
        response = await remove_expense(expenseID)
        if response : 
                return response
        raise HTTPException(404,f'Expense with expenseID {expenseID} not found.')