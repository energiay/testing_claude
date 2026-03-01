import React from "react"
import classes from "./Table.module.css"

import prepareData from './prepareData'
import Record from '@Components/Shared/Record'

function Table({tasks}) {
    const {records, header} = prepareData(tasks)

    return (
        <div className={classes.table}>
            <div className={classes.header}>
                <Record record={header} />
            </div>
            <div className={classes.records}>
                {records.map((record, index) => (
                    <Record key={index} record={record} />
                ))}
            </div>
        </div>
    )
}

export default Table
