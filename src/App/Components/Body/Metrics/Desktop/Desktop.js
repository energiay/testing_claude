import React from "react"
import TableWrap from '@Components/Shared/TableWrap'
import Column from '@Components/Shared/Column'
import CircularProgress from '@Components/Shared/CircularProgress'
import Details from './Details'

import classes from "./Desktop.module.css"


function Desktop({metrics, params}) {
    return (
        <>
            <TableWrap
                header="Общий процент обученности по всей зоне ответственности"
                body={
                    <>
                        {metrics.map((metric, i) => {
                            // показать скрыть вертикальную черту в таблице
                            const isShow = metrics.length - 1 !== i

                            // получить цвет диаграммы
                            const color = params.metrics[metric.code].color;
                            const style = { margin: "22px 0" }

                            return (
                                <Column key={i} style={style} divider={isShow}>
                                    <CircularProgress gradient={color}
                                        metric={{...metric, title: metric.name}}
                                        modal={params.modal}
                                    />
                                </Column>
                            )
                        })}
                    </>
                }
            />
            <Details metrics={metrics} params={params} />
        </>
    )
}

export default Desktop
