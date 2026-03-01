import React, {useEffect} from "react"
import classes from "./Body.module.css"

import useBody from './useBody'
import * as consts from './Tabs/consts.js'
import Tabs from './Tabs'
import Educations from './Educations'
import Tasks from './Tasks'

function Body({settings}) {
    const {tab: { code, click }} = useBody(settings)

    if (code == consts.EDUCATIONS) {
        return (
            <div className={classes.Body}>
                <Tabs code={code} click={click} />
                <Educations settings={settings} />
            </div>
        )
    }

    if (code === consts.TASKS) {
        return (
            <div className={classes.Body}>
                <Tabs code={code} click={click} />
                <Tasks settings={settings} />
            </div>
        )
    }

    return null
}

export default Body
