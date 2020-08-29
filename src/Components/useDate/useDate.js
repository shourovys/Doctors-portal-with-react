import React from 'react';
import { createContext } from 'react';
import { useContext } from 'react';
import { useState } from 'react';

const dateContext = createContext()

export const useDate = () => useContext(dateContext)

const DateContextProvider = (props) => {
    const [date, setDate] = useState(null)
    console.log(date);
    return (
        <dateContext.Provider value={[date, setDate]}>
            {props.children}
        </dateContext.Provider>
    );
};

export default DateContextProvider;