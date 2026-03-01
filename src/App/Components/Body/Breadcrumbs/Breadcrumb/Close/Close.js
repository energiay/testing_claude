import React from "react"
import getSrcFromName from '@App/libs/getSrcFromName'

import Classes from "./Close.module.css"


function Close({show, click}) {
    if (!show) {
        return null
    }

    const close = getSrcFromName("close")
    return (
        <img className={Classes.close}
            src={close}
            onClick={click}
        />
    )
}

export default Close
