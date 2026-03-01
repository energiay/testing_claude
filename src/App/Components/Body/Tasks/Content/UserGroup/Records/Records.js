import React, {useState} from 'react'
import classes from './Records.module.css'
import event from "@Components/Shared/css/events.module.css"

import Record from './Record'
import Details from './Details'

function Records({items, get}) {
    const [opened, setOpened] = useState({})
    const {users} = items
    const click = (item) => {
        // если поля users не существует - вызов get
        if (!item.users) {
            get({userId: item.id})
            return
        }

        setOpened( prev => ({...prev, [item.id]: !prev[item.id]}) )
    }


    return (
        <div className={classes.list}>
            {items.map((item) => (
                <React.Fragment key={item.id}>
                    <Record item={item} click={click} opened={opened}/>
                    <Details users={item.users} opened={opened} />
                </React.Fragment>
            ))}
        </div>
    )
}

export default Records
