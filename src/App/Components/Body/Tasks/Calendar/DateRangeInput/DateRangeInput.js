import React from 'react'
import { formatDate } from '../dateUtils'
import styles from './DateRangeInput.module.css'
import getSrcFromName from '@App/libs/getSrcFromName'

/**
 * DateRangeInput — кнопка-инпут, отображающая выбранный диапазон дат.
 *
 * @param {Object}    props
 * @param {Date|null} props.startDate
 * @param {Date|null} props.endDate
 * @param {boolean}   props.isOpen
 * @param {function}  props.onClick     — открывает / закрывает календарь
 */
function DateRangeInput({
    startDate,
    endDate,
    isOpen,
    onClick
}) {

    const image = getSrcFromName('calendar')
    const startText = formatDate(startDate)
    const endText = formatDate(endDate)

    return (
        <div className={styles.input}
            onClick={onClick}
            aria-haspopup="dialog"
            aria-expanded={isOpen}
        >
            <div className={styles.iconWrap} >
                <img src={image} />
            </div>

            <div className={styles.divider} />

            <div className={styles.values}>
                <div className={styles.dateText} >
                    {startText}
                </div>
            </div>

            <div className={styles.separator}>–</div>

            <div className={styles.values}>
                <div className={styles.dateText}>
                    {endText}
                </div>
            </div>
        </div>
    )
}

export default DateRangeInput
