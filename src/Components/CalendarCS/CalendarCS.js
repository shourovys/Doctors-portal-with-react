import React, { useState, useEffect } from 'react';
import './CalendarCS.css'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function CalendarCS() {
    const [value, onChange] = useState(new Date());

    const selectedDay = value.getDate()
    const selectedMonth = value.getMonth()
    const selectedYear = value.getFullYear()

    let date = `${selectedDay}/${selectedMonth}/${selectedYear}`

    useEffect(() => {
        localStorage.setItem('date', date)
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