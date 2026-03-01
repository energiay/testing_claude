import React from "react"
import classes from "./Task.module.css"

import Duration from '@Components/Shared/Duration'

function Task({task}) {
    const {name, duration} = task

    return (
        <div className={classes.task}>
            <div>{name}</div>
            <div className={classes.duration}>
                <Duration text={duration} />
            </div>
        </div>
    )
}

export default Task
