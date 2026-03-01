import React from 'react'
import Arrow from './Arrow'
import Close from './Close'
import Person from './Person'

import styles from './Breadcrumb.module.css'


function Breadcrumb({text, close, click, last, isOneElem}) {
    const cls = [styles.breadcrumb]
    if (!last) {
        cls.push(styles.click)
    }

    return (
        <>
            <div className={cls.join(" ")} onClick={click}>
                <Person click={click}/>
                <span className={styles.text}>{text}</span>
                <Close show={!isOneElem && last} click={close} />
            </div>
            <Arrow show={!last} />
        </>
    )
}

export default Breadcrumb
