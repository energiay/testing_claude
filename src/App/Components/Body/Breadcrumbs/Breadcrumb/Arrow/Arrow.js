import React from "react"
import getSrcFromName from '@App/libs/getSrcFromName'

import Classes from "./Arrow.module.css"


function Arrow({show}) {
    if (!show) {
        return null
    }

    var line = getSrcFromName("line")
    return (
        <img src={line} className={Classes.Arrow} />
    )
}

export default Arrow
