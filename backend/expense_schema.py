from expense_model import Expense 
from pydantic import BaseModel


def expense_serializer(expense : Expense) -> dict: 
        return {
                'expenseID' : expense.expenseID,
                'date' : str(expense.expenseID),
                'category' : expense.category,
                'amount' : expense.amount
        }

def expenses_serializer(expenses : Expense) -> list: 
        return [expense_serializer(expense) for expense in expenses]