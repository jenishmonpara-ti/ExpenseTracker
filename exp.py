import datetime

temp = '1993-12-31'

date = datetime.date.fromisoformat(temp)
date2 = datetime.date.today()

print(type(date))
print(date > date2)


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
def get_date(date : str) : 
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

  

ans = get_date('Wed Jun 01 2022 23:29:19 GMT+0530 (India Standard Time)')
print(ans)
date = datetime.date.fromisoformat(ans)
print(date)

# {'expenseID': 1654106505, 'date': 'Wed Jun 01 2022 23:29:19 GMT+0530 (India Standard Time)', 'category': 'clothes', 'amount': 2500}