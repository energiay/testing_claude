import React from "react"
import classes from "./Progress.module.css"

import { getStyle } from './getStyle.js'


function Progress({val=0, gradient, opacity=1, click=()=>{}}) {
    const style = getStyle(val, gradient, opacity)

    return (
        <div className={classes.progress_hover}
            style={style.hover}
            onClick={click}
        >
            <div className={classes.progress_wrap}>
                <div className={classes.progress} style={style.progress}></div>
                <div className={classes.value} style={style.value}>
                    <span>{val}</span>
                    <span className={classes.percent}>%</span>
                </div>
            </div>
        </div>
    )
}

export default Progress
