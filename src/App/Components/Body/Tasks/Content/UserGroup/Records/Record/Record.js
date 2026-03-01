import React from 'react'
import classes from './Record.module.css'
import event from "@Components/Shared/css/events.module.css"

import Item from '../Item'
import Cell from '@Components/Shared/Table/Cell'
import Record from '@Components/Shared/Table/Record'
import Column from '@Components/Shared/Table/Column'
import Value from '../Value'

function Records({item, click, opened}) {
    return (
        <Record className={event.record}>
            <Column>
                <Cell className={event.first_cell}>
                    <Item item={item} click={() => click(item)} opened={opened} />
                </Cell>
            </Column>
            <Column className={event.column}>
                <Cell>
                    <Value value={item.assigned} />
                </Cell>
            </Column>
            <Column className={event.column}>
                <Cell>
                    <Value value={item.completed} />
                </Cell>
            </Column>
            <Column className={event.column}>
                <Cell>
                    <Value value={item.percent} />
                </Cell>
            </Column>
        </Record>
    )
}

export default Records
