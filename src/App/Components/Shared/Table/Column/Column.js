import React from "react"
import classes from "./Column.module.css"

function Column({className="", children, ...props}) {
    return (
        <div className={`${classes.column} ${className}`} {...props}>
            {children}
        </div>
    )
}

export default Column
