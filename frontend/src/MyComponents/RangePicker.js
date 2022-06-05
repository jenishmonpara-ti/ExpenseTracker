import React, { useState, useEffect } from "react";
import axios from "axios";
import DatePicker from 'react-date-picker';


const RangePicker = () => {

    const setStartDateValue = async () => {     // if not set async + await then empty response would be returned
        var retobj
        const res = await axios.get('http://localhost:8000/api/startDate');
        console.log(res)
        retobj = new Date(res.data['yyyy'], res.data['mm'] - 1, res.data['dd']);    // month is zero indexed for date( ,mm , ) T_T
        console.log(retobj)
        return retobj;

    }

    const setEndDateValue = async () => {

        var retobj
        const res = await axios.get('http://localhost:8000/api/endDate');
        retobj = new Date(res.data['yyyy'], res.data['mm'] - 1, res.data['dd']);    // month is zero indexed for date( ,mm , ) T_T
        return retobj;

    }

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const startDateChangeHandler = (date) => {
        setStartDate(date);
        axios.post(`http://localhost:8000/api/startDate/${date}`)
            .then(response => console.log(response))
    }

    const endDateChangeHandler = (date) => {
        setEndDate(date);
        axios.post(`http://localhost:8000/api/endDate/${date}`)
            .then(response => console.log(response))
    }


    useEffect(
        () => {
            setStartDateValue().then( res => setStartDate(res))     // .then is used to resolve a promise object and extract true returned objects from async func
            setEndDateValue().then( res => setEndDate(res))

        }
    )


    return (
        <>
            <DatePicker
                selected={startDate}
                onChange={
                    (date) => startDateChangeHandler(date)
                }

                selectsStart
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
                value={endDate}
                minDate={startDate}
                maxDate={new Date()}
            />
            <br />
            <br />
        </>
    )
}

export default RangePicker


