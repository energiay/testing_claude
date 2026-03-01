import React from "react"
import classes from "./Header.module.css"
import event from "@Components/Shared/css/events.module.css"

import BlueSquare from "@Components/Shared/BlueSquare"
import Cell from '@Components/Shared/Table/Cell'
import Column from '@Components/Shared/Table/Column'
import Record from '@Components/Shared/Table/Record'
import pluralize from "@App/libs/pluralize"
import useResize from '@hooks/useResize'

function Header({title, total}) {
    const {assigned, completed, percent} = total

    const main = [event.header_no_line, classes.main]

    const events = ["мероприятие", "мероприятия", "мероприятий"]
    let wordEvent = pluralize(assigned, events)
    const [width] = useResize()
    if (width <= 1024) {
        wordEvent = ""
    }


    return (
        <div className={classes.header}>
            <Record>
                <Column>
                    <Cell className={event.first_cell}>
                        <div>
                            <BlueSquare imageName="filters" />
                            <div className={classes.title}>{title}</div>
                        </div>
                    </Cell>
                </Column>
                <Column className={event.header_second_column}>
                    <Cell className={main.join(" ")}>Назначено</Cell>
                    <Cell className={event.header_no_line}>
                        {assigned} {wordEvent}
                    </Cell>
                </Column>
                <Column className={event.col_3_4}>
                    <Cell className={main.join(" ")}>Пройдено</Cell>
                    <Record>
                        <Column className={event.col_3}>
                            <Cell>{completed}</Cell>
                        </Column>
                        <Column className={event.col_4}>
                            <Cell>{percent}</Cell>
                        </Column>
                    </Record>
                </Column>
            </Record>
        </div>
    )
}

export default Header
