import React from "react"

import TableWrap from '@Components/Shared/TableWrap'
import BlueSquare from '@Components/Shared/BlueSquare'
import Column from '@Components/Shared/Column'
import Progress from '@Components/Shared/Progress'
import TableNameRecord from '@Components/Shared/TableNameRecord'
import Office from '@Components/Shared/Office'

function DetailWrap({metric, params, details}) {
    if (!metric) {
        return null
    }

    return (
        <>
            {metric.offices.map((office) => (
                <Office
                    key={office.id}
                    office={office}
                    metrics={[metric]}
                    params={params}
                    details={details}
                />
            ))}
        </>
    )
    /*
    return (
        <>
            {metric.offices.map((office, index) => {
                const mc = metric.code
                const color = params.metrics[metric.code].color

                return (
                    <TableWrap key={index}
                        header={ <TableNameRecord value={office} /> }
                        body={
                            <Column>
                                <Progress val={office.value}
                                    gradient={color}
                                />
                            </Column>
                        }
                    />
                )
            })}
        </>
    )
    */
}

export default DetailWrap
