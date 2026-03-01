import React from 'react'
import classes from './Item.module.css'

function Item({item, click=()=>{}, opened={}}) {
    const cls = [classes.item]
    if (opened[item.id]) {
        cls.push(classes.opened)
    }

    return (
        <div className={cls.join(" ")} onClick={click}>
            <span className={classes.name}>{item.shortname}</span>
        </div>
    )
}

export default Item
