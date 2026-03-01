import React from 'react'
import classes from "./UserGroup.module.css";

import Records from "./Records";
import Header from './Header'

function UserGroup({ title="", total={}, items=[], get=()=>{} }) {
    return (
        <div className={classes.wrapper}>
            <Header title={title} total={total} />
            <Records items={items} get={get} />
        </div>
    )
}

export default UserGroup;
