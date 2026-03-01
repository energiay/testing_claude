import React, {useEffect, useState} from "react"
import classes from "./TableNameColumn.module.css"

function TableNameColumn({metric, children}) {
    const {
        name,
        code,
    } = metric


//    const [width, setWidth] = useState(null)
//
//    useEffect(() => {
//        const targetElement = document.getElementById(code)
//        if (targetElement) {
//            const computedWidth = targetElement.getBoundingClientRect().width
//            setWidth(computedWidth)
//        }
//    }, [])
//
//    <div className={classes.header} style={{width: width + "px"}}>

    return (
        <div className={classes.header}>
            {name}
        </div>
    )
}

export default TableNameColumn
