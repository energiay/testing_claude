import React from "react"
import TableWrap from '@Components/Shared/TableWrap'
import Column from '@Components/Shared/Column'
import BlueSquare from '@Components/Shared/BlueSquare'
import TableNameColumn from '@Components/Shared/TableNameColumn'

import classes from "./HeaderWrap.module.css"


function HeaderWrap({metrics}) {
    const style ={
        marginTop: "18px",
        alignItems: "baseline",
    }

    return (
        <TableWrap
            header={
                <>
                    <BlueSquare imageName="office" />
                    <div>Офис</div>
                </>
            }
            body={
                <>
                    {metrics.map((metric, index) => {
                        // показать скрыть вертикальную черту в таблице
                        const isShow = metrics.length - 1 !== index

                        return (
                            <Column key={index} divider={isShow} style={style}>
                                <TableNameColumn metric={metric} />
                            </Column>
                        )
                    })}
                </>
            }
        />
    )
}

export default HeaderWrap
