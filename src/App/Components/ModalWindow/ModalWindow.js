import React from 'react'
import classes from './ModalWindow.module.css'

import Sections from './Sections'
import useModalWindow from './useModalWindow'

function ModalWindow({modal, settings}) {
    const {
        open,
        metric,
        toggle,
        img,
        content,
    } = useModalWindow(modal, settings)

    if (!open) {
        return null
    }

    return (
        <div className={classes.overlay} onClick={toggle}>
            <div className={classes.modal} onClick={(e) => e.stopPropagation()}>
                <div className={classes.header}>
                    <div className={classes.X}>
                        <img src={img} alt="" onClick={toggle} />
                    </div>
                    <div className={classes.title}>{metric.name}</div>
                </div>

                <div className={classes.content}>
                    <Sections content={content} />
                </div>

                <div className={classes.footer}>
                    <div className={classes.closeBtn} onClick={toggle}>
                        Закрыть
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalWindow
