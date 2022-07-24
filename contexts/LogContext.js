import React, {useEffect, useRef} from 'react';
import { createContext, useState } from 'react';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';

const LogContext = createContext();

export function LogContextProvider({children}) {
    const [logs, setLogs] = useState([
        {
            id: uuidv4(),
            days: 30 ,
            title: "매일 운동하기🔥",
            date: "22.07.01 ~ 22.07.31",
            color: '#EC7B97',
        },
        {
            id: uuidv4(),
            days: 365 ,
            title: "스페인어 마스터💃🏻",
            date: "22.07.01 ~ 22.07.31",
            color: '#F8A14B',
        },
        {
            id: uuidv4(),
            days: 80 ,
            title: "일주일에 책 한 권📖",
            date: "22.07.01 ~ 22.07.31",
            color: '#875ACC',
        },
        {
            id: uuidv4(),
            days: 100 ,
            title: "1일 1커밋, 잔디심기🌱",
            date: "22.07.01 ~ 22.07.31",
            color: '#7CAC5D',
        },
        {
            id: uuidv4(),
            days: 30 ,
            title: "매일 운동하기🔥",
            date: "22.07.01 ~ 22.07.31",
            color: '#EC7B97',
        },
        {
            id: uuidv4(),
            days: 365 ,
            title: "스페인어 마스터💃🏻",
            date: "22.07.01 ~ 22.07.31",
            color: '#FF9933',
        },
        {
            id: uuidv4(),
            days: 80 ,
            title: "일주일에 책 한 권📖",
            date: "22.07.01 ~ 22.07.31",
            color: '#804DCB',
        },
        {
            id: uuidv4(),
            days: 100 ,
            title: "1일 1커밋, 잔디심기🌱",
            date: "22.07.01 ~ 22.07.31",
            color: '#71AA4A',
        },
        {
            id: uuidv4(),
            days: 30 ,
            title: "매일 운동하기🔥",
            date: "22.07.01 ~ 22.07.31",
            color: '#EC7B97',
        },
        {
            id: uuidv4(),
            days: 365 ,
            title: "스페인어 마스터💃🏻",
            date: "22.07.01 ~ 22.07.31",
            color: '#FF9933',
        },
        {
            id: uuidv4(),
            days: 80 ,
            title: "일주일에 책 한 권📖",
            date: "22.07.01 ~ 22.07.31",
            color: '#804DCB',
        },
        {
            id: uuidv4(),
            days: 100 ,
            title: "1일 1커밋, 잔디심기🌱",
            date: "22.07.01 ~ 22.07.31",
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