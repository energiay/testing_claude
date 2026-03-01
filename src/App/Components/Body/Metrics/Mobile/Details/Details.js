import React from "react"
import classes from "./Details.module.css"

import HeaderWrap from './HeaderWrap'
import DetailWrap from './DetailWrap'
import getDetails from './getDetails'


function Details({metric, params}) {
    const details = getDetails(metric)
    if (details === null) {
        return null
    }

    return (
        <div className={classes.details}>
            <HeaderWrap metric={metric} />
            <DetailWrap metric={metric} params={params} details={details}/>
        </div>
    )
}

export default Details
