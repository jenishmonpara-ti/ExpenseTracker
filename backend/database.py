import motor.motor_asyncio
from models import Expense , ExpenseSplit
import logging
from datetime import date
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





get_month = {
    'Jan' : '01',
    'Feb' : '02',
    'Mar' : '03',
    'Apr' : '04',
    'May' : '05',
    'Jun' : '06',
    'Jul' : '07',
    'Aug' : '08',
    'Sep' : '09',
    'Oct' : '10',
    'Nov' : '11',
    'Dec' : '12'
}
def get_date(date : str) -> str : 
    vals = date.split()
    print(vals)
    response = ''

    response += vals[3]
    response += '-'

    try : 
        response += get_month[vals[1]]
    except Exception as e:
        # logging.critical(e, exc_info=True)
        response += '09'

    response += '-'
    response += vals[2]

    return response

# {'expenseID': 1654106505, 'date': 'Wed Jun 01 2022 23:29:19 GMT+0530 (India Standard Time)', 'category': 'clothes', 'amount': 2500}

async def insert_expense(expense : Expense):
    document = expense
    print(document)
    document['date'] = get_date(document['date'])
    result = await collection.insert_one(document)
    return document


async def remove_expense(expenseID : int):
    try : 
        await collection.delete_one({"expenseID": expenseID})
    except Exception as e: 
        logging.error('Error from remove expense')
        logging.error(e)
    return True