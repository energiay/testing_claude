import React from 'react'
import CalendarHeader from '../CalendarHeader'
import CalendarGrid   from '../CalendarGrid'
import styles from './CalendarDropdown.module.css'

/**
 * CalendarDropdown — выпадающая панель с календарём.
 *
 * @param {Object}    props
 * @param {number}    props.viewYear
 * @param {number}    props.viewMonth
 * @param {Date|null} props.startDate
 * @param {Date|null} props.endDate
 * @param {Date|null} props.hoveredDate
 * @param {function}  props.onPrevMonth
 * @param {function}  props.onNextMonth
 * @param {function}  props.onDayClick
 * @param {function}  props.onDayMouseEnter
 * @param {function}  props.onMouseLeave
 */
function CalendarDropdown({
  viewYear,
  viewMonth,
  startDate,
  endDate,
  hoveredDate,
  onPrevMonth,
  onNextMonth,
  onDayClick,
  onDayMouseEnter,
  onMouseLeave,
}) {
  return (
    <div className={styles.dropdown}
      role="dialog"
      aria-label="Выбор диапазона дат"
      onMouseLeave={onMouseLeave}
    >
      <CalendarHeader
        year={viewYear}
        month={viewMonth}
        onPrevMonth={onPrevMonth}
        onNextMonth={onNextMonth}
      />
      <CalendarGrid
        year={viewYear}
        month={viewMonth}
        startDate={startDate}
        endDate={endDate}
        hoveredDate={hoveredDate}
        onDayClick={onDayClick}
        onDayMouseEnter={onDayMouseEnter}
      />
    </div>
  )
}

export default CalendarDropdown
