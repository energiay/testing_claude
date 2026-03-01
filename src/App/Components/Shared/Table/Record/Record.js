import React from "react"
import classes from "./Record.module.css"

function Record({className="", children, ...props}) {
    return (
        <div className={`${classes.record} ${className}`} {...props}>
            {children}
        </div>
    )
}

export default Record
