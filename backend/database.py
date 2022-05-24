import motor.motor_asyncio
from expense_model import Expense

client = motor.motor_asyncio.AsyncIOMotorClient('')
database = client.ExpenseTracker
collection = database.Expenses

async def fetch_one_expense(expenseID : int):
    document = await collection.find_one({"expenseID": expenseID})
    return document

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


async def update_expense(expenseID : int, amount : int):
    await collection.update_one({"expenseID": expenseID}, {"$set": {"amount": amount}})
    document = await collection.find_one({"expenseID": expenseID})
    return document

async def remove_expense(expenseID : int):
    await collection.delete_one({"expenseID": expenseID})
    return True