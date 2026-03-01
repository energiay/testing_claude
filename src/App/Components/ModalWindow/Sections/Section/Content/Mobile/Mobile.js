import React from "react"
import classes from "./Mobile.module.css"

import Task from './Task'
import prepareData from './prepareData'
import Table from './Table'

function Mobile({tasks}) {
    return (
        <div className={classes.mobile}>
            {tasks.map((task, index) => {
                const records = prepareData(task)
                const last = (index === tasks.length-1)
                const stLast = (last ? {borderBottom: "0"} : {})

                return (
                    <React.Fragment key={index}>
                        <div className={classes.record} style={stLast}>
                            <Task key={index} task={task}/>
                            <Table records={records} />
                        </div>
                    </React.Fragment>
                )
            })}
        </div>
    )
}

export default Mobile
