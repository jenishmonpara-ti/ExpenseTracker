import React, { useState, useEffect } from "react";
import axios from "axios";
import DatePicker from 'react-date-picker';


const RangePicker = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const startDateChangeHandler = (date) => {
        setStartDate(date);
        axios.post('http://localhost:8000/api/startDate/' , date)
        .then(response => console.log(response))
    }

    const endDateChangeHandler = (date) => {
        setEndDate(date);
        axios.post('http://localhost:8000/api/endDate/' , date)
        .then(response => console.log(response))
    }

    return (
        <>
            <DatePicker
                selected={startDate}
                onChange={
                    (date) => startDateChangeHandler(date)
                }
                
                selectsStart
                // startDate={startDate}
                // endDate={endDate}
                value={startDate}
                maxDate={endDate}
            />
            <h5> to </h5>
            <DatePicker
                selected={endDate}
                onChange={
                    (date) => endDateChangeHandler(date)
                }
                selectsEnd
                // startDate={startDate}
                // endDate={endDate}
                value={endDate}
                minDate={startDate}
                maxDate={new Date()}
            />
            <br/>
            <br/>
        </>
    )
}

export default RangePicker


