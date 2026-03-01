import React from "react"
import event from "@Components/Shared/css/events.module.css"

import Cell from '@Components/Shared/Table/Cell'
import Record from '@Components/Shared/Table/Record'
import Column from '@Components/Shared/Table/Column'
import Item from './Item'

function Detail({user}) {
    return (
        <Record className={event.record}>
            <Column>
                <Cell className={event.first_cell}>
                    <Item item={user} />
                </Cell>
            </Column>
            <Column className={event.column}>
                <Cell>
                    <div>{user.assigned}</div>
                </Cell>
            </Column>
            <Column className={event.column}>
                <Cell>
                    <div>{user.completed}</div>
                </Cell>
            </Column>
            <Column className={event.column}>
                <Cell>
                    <div>{user.percent}</div>
                </Cell>
            </Column>
        </Record>
    )
}

export default Detail
