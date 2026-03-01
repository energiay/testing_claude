import React from "react"
import classes from "./Educations.module.css"

import Breadcrumbs from '../Breadcrumbs'
import Metrics from '../Metrics'
import Filters from '../Filters'
import ModalWindow from '@Components/ModalWindow'
import useEducations from './useEducations'
import Spinner from '@Components/Shared/Spinner'
import { EDUCATIONS } from '../Tabs/consts.js'

function Educations({settings}) {
    const {
        data = null,
        params = {},
        getData,
    } = useEducations(settings, EDUCATIONS)

    if (data === null) {
        return <Spinner />
    }

    return (
        <div className={classes.educations}>
            <Breadcrumbs breadcrumbs={data.breadcrumbs} get={getData}/>
            <Metrics metrics={data.metrics} params={params} />
            <Filters filters={data.filters} get={getData}/>
            <ModalWindow modal={params.modal} settings={settings}/>
        </div>
    )
}

export default Educations
