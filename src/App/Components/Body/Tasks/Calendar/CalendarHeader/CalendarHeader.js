import React from 'react'
import styles from './CalendarHeader.module.css'
import getSrcFromName from '@App/libs/getSrcFromName'

const MONTHS_RU = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь'
]

/**
 * CalendarHeader — заголовок календаря с навигацией по месяцам.
 *
 * @param {Object}   props
 * @param {number}   props.year
 * @param {number}   props.month       — 0-based
 * @param {function} props.onPrevMonth
 * @param {function} props.onNextMonth
 */
function CalendarHeader({ year, month, onPrevMonth, onNextMonth }) {
    const left = getSrcFromName('calendar_left')
    const right = getSrcFromName('calendar_right')

    return (
        <div className={styles.header}>
            <div className={styles.title}>
                <span className={styles.monthName}>{MONTHS_RU[month]}</span>
                <span className={styles.year}>{year}</span>
            </div>

            <div className={styles.navButtons}>
                <div className={styles.navBtn} onClick={onPrevMonth}>
                    <img src={left} />
                </div>
                <div className={styles.navBtn} onClick={onNextMonth}>
                    <img src={right} />
                </div>
            </div>
        </div>
    )
}

export default CalendarHeader
