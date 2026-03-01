import React from 'react'
import classes from './Content.module.css'
import UserGroup from './UserGroup'

const Content = ({data, get}) => {
    const {title, items, total} = data

    return (
        <div className={classes.container}>
            <UserGroup title={title} items={items} total={total} get={get}/>
        </div>
    )
}

export default Content
