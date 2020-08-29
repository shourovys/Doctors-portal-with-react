import React, { useState, useEffect } from 'react';
import './CalendarCS.css'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useDate } from '../useDate/useDate';


function CalendarCS() {
    const [value, onChange] = useState(new Date());
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const selectedDay = value.getDate()
    const selectedMonth = months[value.getMonth()]
    const selectedYear = value.getFullYear()

    const selectedDate = `${selectedDay}${selectedMonth}${selectedYear}`
    const [date, setDate] = useDate()


    useEffect(() => {
        setDate(selectedDate)
    }, [value])


    return (
        <div>
            <Calendar className='CalendarCS'
                onChange={onChange}
                value={value}
            />
        </div>
    );
}

export default CalendarCS

