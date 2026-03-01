import React from "react"
import Filter from './Filter'
import BlueSquare from '@Components/Shared/BlueSquare'

import classes from "./Filters.module.css"


function Filters({filters, get}) {
    if (!filters.users.length) {
        return null
    }

    return (
        <div className={classes.filters}>
            <div className={classes.name}>
                <BlueSquare imageName="filters" />
                <div className={classes.title}>{filters.title}</div>
            </div>
            <div className={classes.content}>
                {filters.users.map((user) => {
                    return (
                        <div key={user.id}>
                            <Filter user={user} get={get} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Filters
