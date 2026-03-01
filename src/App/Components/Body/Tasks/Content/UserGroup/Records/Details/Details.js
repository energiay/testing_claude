import React, {useEffect, useRef} from 'react'
import classes from './Details.module.css'

import useDropDown from '@App/hooks/useDropDown'
import Detail from './Detail'

function Details({users, opened}) {
    const {content, height, click} = useDropDown()
    const stHeight = {
        maxHeight: height + "px",
        marginBottom: height ? "15px" : "0px",
    }

    const isFirstRender = useRef(true)
    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false
            return
        }

        click()
    }, [opened])

    if (!users) {
        return null
    }

    return (
        <div style={stHeight} className={classes.details}>
            <div ref={content}>
                <div className={classes.list}>
                    {users.map((user) => (
                        <React.Fragment key={user.id}>
                            <Detail user={user} />
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Details
