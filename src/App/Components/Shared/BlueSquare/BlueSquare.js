import React from "react"
import getSrcFromName from '@App/libs/getSrcFromName'

import classes from "./BlueSquare.module.css"


function BlueSquare({imageName}) {
    const image = getSrcFromName(imageName)
    return (
        <div className={classes.square}>
            <span><img src={image} /></span>
        </div>
    )
}

export default BlueSquare
