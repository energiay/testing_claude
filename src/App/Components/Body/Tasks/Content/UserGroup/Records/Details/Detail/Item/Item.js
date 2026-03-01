import React from 'react'
import classes from './Item.module.css'

function Item({item}) {
    return (
        <div className={classes.item}>
            <span className={classes.name}>{item.shortname}</span>
        </div>
    )
}

export default Item
