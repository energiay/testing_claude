import React from "react"
import classes from "./Section.module.css"

import useSection from './useSection'
import Content from './Content'

function Section({section, open}) {
    const {
        content,
        stHeight,
        stBackground,
        stBorder,
        imgType,
        imgDropDown,
        name,
        click,
        tasks,
    } = useSection(section, open)

    return (
        <div className={classes.section} style={stBorder}>
            <div className={classes.header} onClick={click} style={stBackground}>
                <div className={classes.title}>
                    <img src={imgType} alt="" />
                    <span>{name}</span>
                </div>
                <div className={classes.drop_down}>
                    <img src={imgDropDown} alt="" />
                </div>
            </div>

            <div style={stHeight} className={classes.content}>
                <div ref={content}>
                    <Content tasks={tasks} />
                </div>
            </div>
        </div>
    )
}

export default Section
