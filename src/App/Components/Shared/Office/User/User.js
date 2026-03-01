import React from "react"
import TableWrap from '@Components/Shared/TableWrap'
import TableNameRecord from '@Components/Shared/TableNameRecord'
import Columns from '../Columns'

function User({ user, metrics, params, details, isLast }) {
    return (
        <TableWrap
            header={<TableNameRecord value={user} />}
            body={
                <Columns
                    entity={user}
                    entityType="user"
                    metrics={metrics}
                    params={params}
                    details={details}
                    opacity={0.35}
                />
            }
        />
    )
}

export default User
