import React, { useState, useEffect } from 'react'

const TimerFun = () => {

    const [time, setTime] = useState(new Date().toLocaleTimeString())

    useEffect(() => {
        // componentDidMount and componentDidUpdate
        const timeI = setInterval(() => { setTime(new Date().toLocaleTimeString()) }, 1000)

        // componentWillUnmount
        return () => {
            clearInterval(timeI)
        }

    }, [time])

    return (
        <>
            <div className='text-center py-5 mb-5'>
                <h1>Timer with Function based component</h1>
                <div style={{ fontSize: '72px' }}>{time}</div>
            </div>
        </>
    )
}

export default TimerFun