import React from "react"
import classes from './Calendar.module.css'
import DateRangePicker from './DateRangePicker'

function Calendar({start, end, click}) {

    return (
        <div className={classes.calendar}>
            <DateRangePicker start={start} end={end} onChange={click}/>
        </div>
    )
}

export default Calendar
