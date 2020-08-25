import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function CalendarCS() {
    const [value, onChange] = useState(new Date());

    const selectedDay = value.getDate()
    const selectedMonth = value.getMonth()
    const selectedYear = value.getFullYear()



    return (
        <div>
            <Calendar
                onChange={onChange}
                value={value}
            />
        </div>
    );
}
export default CalendarCS