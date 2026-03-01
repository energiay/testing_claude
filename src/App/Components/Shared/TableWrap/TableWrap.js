import React from "react"
import classes from "./TableWrap.module.css"

function TableWrap({header, body, style}) {
    const clsHeader = [classes.header]
    const isStringHeader = typeof header === 'string';
    if (!isStringHeader) {
        clsHeader.push(classes.office)
    }

    return (
        <div className={classes.table} style={style}>
            <div className={clsHeader.join(" ")}>{header}</div>
            <div className={classes.contant}>
                {body}
            </div>
        </div>
    )
}

export default TableWrap
