import React from "react"
import classes from "./Table.module.css"

import Record from '@Components/Shared/Record'

function Table({records}) {
    if (!records.length) {
        return null
    }

    return (
        <div className={classes.table}>
            {records.map((record, index) => {
                let first = false
                if (index === 0) {
                    first = true
                }

                let last = false
                if (index === records.length-1) {
                    last = true
                }

                return <Record key={index}
                    record={record}
                    first={first}
                    last={last}
                />
            })}
        </div>
    )
}

export default Table
