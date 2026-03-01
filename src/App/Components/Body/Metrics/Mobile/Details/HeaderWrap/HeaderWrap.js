import React from "react"

import TableWrap from '@Components/Shared/TableWrap'
import Column from '@Components/Shared/Column'
import BlueSquare from '@Components/Shared/BlueSquare'
import TableNameColumn from '@Components/Shared/TableNameColumn'

function HeaderWrap({metric}) {

    return (
        <TableWrap
            header={
                <>
                    <BlueSquare imageName="office" />
                    <div>Офис</div>
                </>
            }
            body={
                <Column>
                    <TableNameColumn metric={metric} />
                </Column>
            }
        />
    )
}

export default HeaderWrap
