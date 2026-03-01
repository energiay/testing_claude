import React from "react"
import classes from "./Details.module.css"

import HeaderWrap from './HeaderWrap'
import getDetails from './getDetails'
import DetailWrap from './DetailWrap'

function Details({metrics, params}) {
    const details = getDetails(metrics)
    if (details === null) {
        return null
    }

    return (
        <div className={classes.details}>
            <HeaderWrap metrics={metrics} />
            <DetailWrap metrics={metrics} params={params} details={details} />
        </div>
    )
}

export default Details
