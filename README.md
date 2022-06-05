# Expense tracker using FARM stack

## Initiating the DB
- mongod --config ./mongod.conf    # to start DB
- create 'Expense' collection inside 'ExpenseTracker' database inside MongoDB Compass
- connect ExpenseTracker from MongoDB Compass


## Initiating  server
- pip3 install -r requirements.txt
- uvicorn main:app --reload     # to start backend from backend dir
- reinstall requirements using "pip3 install -r requirements.txt" when uvicorn server stops or motor starting


## frontend
- (you do not need to execute this if you are not coding from scratch) npx create-react-app frontend         # from workspace directory
- npm install axios bootstrap
- npm install react-date-picker
- npm start     # to start frontend


## next GOAL
- add session and user auth


- git reset --hard {key} to go back to previous versions of project