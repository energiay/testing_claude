import React from "react"
import classes from './Column.module.css'


function Column({divider, style={}, children}) {
    if (!divider) {
        return (
            <div className={classes.column} style={style}>
                {children}
            </div>
        )
    }

    return (
        <>
            <div className={classes.column} style={style}>
                {children}
            </div>
            <div className={classes.divider} style={style}></div>
        </>
    )
}

export default Column
