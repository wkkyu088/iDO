import React, {useEffect, useRef} from 'react';
import { createContext, useState } from 'react';

const LogContext = createContext();

export function LogContextProvider({children}) {
    const [logs, setLogs] = useState([
        {
            days: "30일" ,
            title: "매일 운동하기🔥",
            date: "22.07.01 ~ 22.07.31",
            backgroundColor: '#EC7B971A',
            color: '#EC7B97',
        },
        {
            days: "365일" ,
            title: "스페인어 마스터💃🏻",
            date: "22.07.01 ~ 22.07.31",
            backgroundColor: '#FF99331A',
            color: '#F8A14B',
        },
        {
            days: "80일" ,
            title: "일주일에 책 한 권📖",
            date: "22.07.01 ~ 22.07.31",
            backgroundColor: '#804DCB1A',
            color: '#875ACC',
        },
        {
            days: "100일" ,
            title: "1일 1커밋, 잔디심기🌱",
            date: "22.07.01 ~ 22.07.31",
            backgroundColor: '#71AA4A1A',
            color: '#7CAC5D',
        },
        {
            days: "30일" ,
            title: "매일 운동하기🔥",
            date: "22.07.01 ~ 22.07.31",
            backgroundColor: '#EC7B971A',
            color: '#EC7B97',
        },
        {
            days: "365일" ,
            title: "스페인어 마스터💃🏻",
            date: "22.07.01 ~ 22.07.31",
            backgroundColor: '#FF99331A',
            color: '#FF9933',
        },
        {
            days: "80일" ,
            title: "일주일에 책 한 권📖",
            date: "22.07.01 ~ 22.07.31",
            backgroundColor: '#804DCB1A',
            color: '#804DCB',
        },
        {
            days: "100일" ,
            title: "1일 1커밋, 잔디심기🌱",
            date: "22.07.01 ~ 22.07.31",
            backgroundColor: '#71AA4A1A',
            color: '#71AA4A',
        },
        {
            days: "30일" ,
            title: "매일 운동하기🔥",
            date: "22.07.01 ~ 22.07.31",
            backgroundColor: '#EC7B971A',
            color: '#EC7B97',
        },
        {
            days: "365일" ,
            title: "스페인어 마스터💃🏻",
            date: "22.07.01 ~ 22.07.31",
            backgroundColor: '#FF99331A',
            color: '#FF9933',
        },
        {
            days: "80일" ,
            title: "일주일에 책 한 권📖",
            date: "22.07.01 ~ 22.07.31",
            backgroundColor: '#804DCB1A',
            color: '#804DCB',
        },
        {
            days: "100일" ,
            title: "1일 1커밋, 잔디심기🌱",
            date: "22.07.01 ~ 22.07.31",
            backgroundColor: '#71AA4A1A',
            color: '#71AA4A',
        },
    ]);

    return (
        <LogContext.Provider value={{logs}}>
            {children}
        </LogContext.Provider>
    );
}

export default LogContext;