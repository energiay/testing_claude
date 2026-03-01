import React from "react"
import classes from "./Tab.module.css"

function Tab({metric, activeCode, click}) {
    const cls = [classes.tab]
    if (metric.code === activeCode) {
        cls.push(classes.active)
    }

    return (
        <div className={cls.join(" ")} onClick={() => click(metric)}>
            {metric.name}
        </div>
    )
}

export default Tab
