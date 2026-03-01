import React from "react"
import classes from "./Sections.module.css"

import Spinner from '@Components/Shared/Spinner'
import Section from './Section'

function Sections({content}) {
    if (!content) {
        return (
            <div className={classes.sections}>
                <Spinner />
            </div>
        )
    }

    return (
        <div className={classes.sections}>
            {content.map((section, index) => {
                const open = index === 0
                return (
                    <Section key={index} section={section} open={open}/>
                )
            })}
        </div>
    )
}

export default Sections
