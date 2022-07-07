import React, {useEffect, useRef} from 'react';
import { createContext, useState } from 'react';

const LogContext = createContext();

export function LogContextProvider({children}) {
    const [logs, setLogs] = useState([
        {
            days: "30일" ,
            title: "매일 운동하기🔥",
            date: "22.07.01 ~ 22.07.31",
        },
        {
            days: "30일" ,
            title: "매일 운동하기🔥",
            date: "22.07.01 ~ 22.07.31",
        },
        {
            days: "30일" ,
            title: "매일 운동하기🔥",
            date: "22.07.01 ~ 22.07.31",
        },
        {
            days: "30일" ,
            title: "매일 운동하기🔥",
            date: "22.07.01 ~ 22.07.31",
        },
        {
            days: "30일" ,
            title: "매일 운동하기🔥",
            date: "22.07.01 ~ 22.07.31",
        },
        {
            days: "30일" ,
            title: "매일 운동하기🔥",
            date: "22.07.01 ~ 22.07.31",
        },
        {
            days: "30일" ,
            title: "매일 운동하기🔥",
            date: "22.07.01 ~ 22.07.31",
        },
        {
            days: "30일" ,
            title: "매일 운동하기🔥",
            date: "22.07.01 ~ 22.07.31",
        },
        {
            days: "30일" ,
            title: "매일 운동하기🔥",
            date: "22.07.01 ~ 22.07.31",
        },
        {
            days: "30일" ,
            title: "매일 운동하기🔥",
            date: "22.07.01 ~ 22.07.31",
        },
        {
            days: "30일" ,
            title: "매일 운동하기🔥",
            date: "22.07.01 ~ 22.07.31",
        },
        {
            days: "30일" ,
            title: "매일 운동하기🔥",
            date: "22.07.01 ~ 22.07.31",
        },
    ]);

    return (
        <LogContext.Provider value={{logs}}>
            {children}
        </LogContext.Provider>
    );
}

export default LogContext;