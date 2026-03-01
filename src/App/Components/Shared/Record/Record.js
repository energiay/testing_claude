import React from "react"
import classes from "./Record.module.css"

import Column from './Column'

function Record({record, first=false, last=false}) {
    return (
        <div className={classes.record}>
            {record.map((column, index) => {
                let isFirst = false
                if (index === 0) {
                    isFirst = true
                }

                let isLast = false
                if (index === record.length-1) {
                    isLast = true
                }

                let {type, style} = column

                let cls = [classes[type]]
                if (first) {
                    cls.push(classes.mobile_first_border)
                }

                return (
                    <div key={index} className={cls.join(" ")} style={style}>
                        <Column column={column}
                            first={isFirst}
                            last={isLast}
                            firstRec={first}
                            lastRec={last}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default Record
