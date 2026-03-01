import React from "react"
import Column from '@Components/Shared/Column'
import Progress from '@Components/Shared/Progress'
import getDetail from './getDetail'

function Columns(props) { 
    const {
        entity,
        entityType,
        metrics,
        params,
        details,
        opacity = 1
    } = props

    return (
        <>
            {metrics.map((metric, index) => {
                const data = getDetail({
                    metrics,
                    metric,
                    index,
                    details,
                    params,
                    [entityType]: entity,
                })

                return (
                    <Column key={index} divider={data.show}>
                        <Progress val={data.val}
                            gradient={data.color}
                            opacity={opacity}
                            click={data.click}
                        />
                    </Column>
                )
            })}
        </>
    )
}

export default Columns
