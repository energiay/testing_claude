import React from "react"
import classes from "./Filter.module.css"

function Filter({user, get}) {

    return (
        <div className={classes.filter} onClick={() => get({userId: user.id})}>
            {user.fullname}
        </div>
    )
}

export default Filter
