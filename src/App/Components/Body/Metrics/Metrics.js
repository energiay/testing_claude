import React from "react"
import Mobile from './Mobile'
import useResize from '@hooks/useResize'
import Desktop from './Desktop'

import classes from "./Metrics.module.css"


function Metrics({metrics, params}) {
    const [width] = useResize()
    if (width <= 1024) {
        return <Mobile metrics={metrics} params={params} />
    }

    return (
        <div className={classes.metrics}>
            <Desktop metrics={metrics} params={params} />
        </div>
    )
}

export default Metrics
