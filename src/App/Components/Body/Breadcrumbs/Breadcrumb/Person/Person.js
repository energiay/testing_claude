import React from "react"
import getSrcFromName from '@App/libs/getSrcFromName'

import classes from "./Person.module.css"


function Person() {
    const person = getSrcFromName("person")

    return (
        <div className={classes.person}>
            <span className={classes.icon}><img src={person} /></span>
        </div>
    )
}

export default Person
