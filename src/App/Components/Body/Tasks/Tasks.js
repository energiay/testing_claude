import React from "react"
import classes from "./Tasks.module.css"

import Calendar from './Calendar'
import Breadcrumbs from '../Breadcrumbs'
import useTasks from './useTasks'
import Spinner from '@Components/Shared/Spinner'
import { TASKS } from '../Tabs/consts.js'
import Content from './Content'

//import rgoTableData from './rgoTableData'

function Tasks({settings}) {
    const {
        data,
        date: { start, end, click},
        getData,
    } = useTasks(settings, TASKS)

    if (!data) {
        return (
            <div className={classes.tasks}>
                <Spinner />
            </div>
        )
    }

    return (
        <div className={classes.tasks}>
            <Calendar start={start} end={end} click={click} />
            <Breadcrumbs breadcrumbs={data.breadcrumbs} get={getData}/>
            <Content data={data.main} get={getData} />
        </div>
    )
}

export default Tasks
