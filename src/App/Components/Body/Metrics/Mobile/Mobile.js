import React, {useState} from "react"
import CircularProgress from '@Components/Shared/CircularProgress'
import Tab from './Tab'
import Details from './Details'

import classes from "./Mobile.module.css"


function Mobile({metrics, params}) {
    const [metric, setMetric] = useState({...metrics[0]})
    const click = (metric) => {
        const newMetric = metrics.find((m) => (m.code === metric.code))
        setMetric({...newMetric})
    }

    const color = params.metrics[metric.code].color

    return (
        <>
            <div className={classes.mobile}>
                <div className={classes.tabs}>
                    {metrics.map((elem) => {
                        return (
                            <Tab key={elem.code}
                                metric={elem}
                                activeCode={metric.code}
                                click={click}
                            />
                        )
                    })}
                </div>
                <div className={classes.contant}>
                    <CircularProgress metric={{...metric, title: ""}}
                        gradient={color}
                        modal={params.modal}
                    />
                </div>
            </div>
            <Details metric={metric} params={params} />
        </>
    )
}

export default Mobile
