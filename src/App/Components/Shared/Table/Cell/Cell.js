import React from "react"
import classes from "./Cell.module.css"

function Cell({className="", children, ...props}) {
    return (
        <div className={classes.cell_wrap} {...props}>
            <div className={`${classes.cell_margin_right} ${className}`} >
                <div className={classes.cell_margin_top}>
                    <div className={classes.cell}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cell
