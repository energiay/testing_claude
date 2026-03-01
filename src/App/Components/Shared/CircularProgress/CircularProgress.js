import React from 'react'
import Diagram from './Diagram'

import styles from './CircularProgress.module.css'


const CircularProgress = (props) => {
    const {
        metric: {
            name = "",
            title = "",
            value = 0,
            code = "",
        },
        gradient = "#1a73e8:#E3F2FF",
        modal: { toggle } = {},
    } = props

    return (
        <div className={styles.container}
            id={code}
            onClick={() => toggle({name, code})}
        >
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.progressWrapper}>
                <Diagram percentage={value} gradient={gradient} />
                <div className={styles.percentageText}>
                    <span className={styles.number}>{value}</span>
                    <span className={styles.percent}>%</span>
                </div>
            </div>
        </div>
    )
}

export default CircularProgress
