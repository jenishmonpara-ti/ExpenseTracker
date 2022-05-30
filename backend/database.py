import motor.motor_asyncio
from models import Expense , ExpenseSplit
import logging
logging.basicConfig(filename = '../logs.log', level = logging.ERROR)

client = motor.motor_asyncio.AsyncIOMotorClient('mongodb://localhost:27017/')
database = client.ExpenseTracker
collection = database.Expenses


async def get_split_db() : 
    expenses = {}
    cursor = collection.find({})
    async for document in cursor : 
        expense = Expense(**document)
        try : 
            expenses[f"{expense.category}"] += expense.amount
        except KeyError : 
            expenses[f"{expense.category}"] = expense.amount

    total = sum(expenses.values())
    expenses['Total'] = total
    expenseSplit = []
    for key,val in expenses.items() : 
        expenseSplit.append(ExpenseSplit(key,val))
    # logging.error(expenseSplit)
    return expenseSplit

async def fetch_all_expenses():
    todos = []
    cursor = collection.find({})
    async for document in cursor:
        todos.append(Expense(**document))
    return todos

async def insert_expense(expense : Expense):
    document = expense
    result = await collection.insert_one(document)
    return document


async def remove_expense(expenseID : int):
    try : 
        await collection.delete_one({"expenseID": expenseID})
    except Exception as e: 
        logging.error('Error from remove expense')
        logging.error(e)
    return True