import React from "react"
import classes from './Office.module.css'
import TableWrap from '@Components/Shared/TableWrap'
import TableNameRecord from '@Components/Shared/TableNameRecord'
import User from './User'
import Columns from './Columns'
import useDropDown from '@App/hooks/useDropDown'

function Office({ office, metrics, params, details }) {
    const {content, height, click} = useDropDown()
    const stHeight = {
        maxHeight: height + "px",
        marginBottom: height ? "16px" : "0px",
    }


    return (
        <>
            <TableWrap
                header={
                    <TableNameRecord value={office}
                        click={click}
                        active={!!height}
                    />
                }
                body={
                    <Columns
                        entity={office}
                        entityType="office"
                        metrics={metrics}
                        params={params}
                        details={details}
                    />
                }
            />

            <div style={stHeight} className={classes.users}>
                <div ref={content}>
                    {office.users.map((user, index) => (
                        <User key={user.id}
                            user={user}
                            metrics={metrics}
                            params={params}
                            details={details}
                            isLast={index === office.users.length - 1}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Office
