import React from "react"
import classes from "./Value.module.css"

function Value({value}) {
    return (
        <div className={classes.value}>
            {value}
        </div>
    )
}

export default Value
