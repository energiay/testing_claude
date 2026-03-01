import React, {useState, useEffect} from "react"

import getSrcFromName from '@App/libs/getSrcFromName'
import useBodyPosition from './useBodyPosition'

import Classes from "./Image.module.css"


function Image({name = ""}) {
    const position = useBodyPosition()

    const img = getSrcFromName(name)
    const style = {
        backgroundImage: "url(" + img + ")",
        right: `${position.right}px`,
    }

    return (
        <div className={Classes.Image} style={style} />
    )

}

export default Image
