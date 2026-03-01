import React from "react"
import classes from "./Duration.module.css"
import getSrcFromName from '@App/libs/getSrcFromName'

function Duration({text}) {
    const time = getSrcFromName("time")

    return (
        <div className={classes.duration}>
            <div>
                <img src={time} />
            </div>
            <div>{text}</div>
        </div>
    )
}

export default Duration
