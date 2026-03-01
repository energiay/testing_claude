import React from "react"
import classes from './Column.module.css'

import Duration from '@Components/Shared/Duration'
import Record from '../Record'

function Column({column, first, last, firstRec, lastRec}) {
    const {value, field, type} = column

    const cls = [classes[type]]
    if (first) {
        cls.push(classes.mobile_first_collumn_padding)
    }

    if (firstRec) {
        cls.push(classes.mobile_first_rec_padding)
    }

    if (lastRec) {
        cls.push(classes.mobile_last_rec_padding)
    }


    if (Array.isArray(value)) {
        return (
            <div className={cls.join(" ")}>
                {value.map((val, index) => (
                    <Record key={index} record={[val]} />
                ))}
            </div>
        )
    }

    if (field === 'duration') {
        return (
            <div className={classes.duration}>
                <Duration text={value} />
            </div>
        )
    }

    return (
        <div className={cls.join(" ")}>
            {value}
        </div>
    )
}

export default Column
