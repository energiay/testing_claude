import React, { useRef, useEffect } from 'react'

import DateRangeInput from '../DateRangeInput'
import CalendarDropdown from '../CalendarDropdown'
import useDateRangePicker from './useDateRangePicker'

import styles from './DateRangePicker.module.css'

/**
 * DateRangePicker — корневой компонент выбора диапазона дат.
 * Собирает DateRangeInput + CalendarDropdown и управляет логикой
 * через хук useDateRangePicker.
 *
 * @param {Object}    props
 * @param {Date|null} props.defaultStart — начальная дата по умолчанию
 * @param {Date|null} props.defaultEnd   — конечная дата по умолчанию
 * @param {function}  props.onChange     — коллбэк ({ startDate, endDate })
 *
 * @example
 * <DateRangePicker
 *   defaultStart={new Date(2026, 0, 1)}
 *   defaultEnd={new Date(2026, 1, 1)}
 *   onChange={({ startDate, endDate }) => console.log(startDate, endDate)}
 * />
 */
function DateRangePicker({ start, end, onChange }) {
    const containerRef = useRef(null)

    const {
        startDate,
        endDate,
        hoveredDate,
        viewYear,
        viewMonth,
        isOpen,
        handleDayClick,
        handleDayMouseEnter,
        handleCalendarMouseLeave,
        goToPrevMonth,
        goToNextMonth,
        toggleCalendar,
        closeCalendar
    } = useDateRangePicker({ start, end })

    // Закрытие по клику вне компонента
    useEffect(() => {
        function handleOutsideClick(e) {
            if (containerRef.current && !containerRef.current.contains(e.target)) {
                closeCalendar()
            }
        }
        if (isOpen) document.addEventListener('mousedown', handleOutsideClick)
        return () => document.removeEventListener('mousedown', handleOutsideClick)
    }, [isOpen, closeCalendar])

    // Закрытие по клавише Escape
    useEffect(() => {
        function handleKeyDown(e) {
            if (e.key === 'Escape') closeCalendar()
        }
        if (isOpen) document.addEventListener('keydown', handleKeyDown)
        return () => document.removeEventListener('keydown', handleKeyDown)
    }, [isOpen, closeCalendar])

    // Уведомляем родителя, когда оба края диапазона выбраны
    useEffect(() => {
        if (onChange && startDate && endDate) {
            onChange({ startDate, endDate })
        }
    }, [startDate, endDate, onChange])

    return (
        <div className={styles.root} ref={containerRef}>
            <DateRangeInput
                startDate={startDate}
                endDate={endDate}
                isOpen={isOpen}
                onClick={toggleCalendar}
            />

            {isOpen && (
                <CalendarDropdown
                    viewYear={viewYear}
                    viewMonth={viewMonth}
                    startDate={startDate}
                    endDate={endDate}
                    hoveredDate={hoveredDate}
                    onPrevMonth={goToPrevMonth}
                    onNextMonth={goToNextMonth}
                    onDayClick={handleDayClick}
                    onDayMouseEnter={handleDayMouseEnter}
                    onMouseLeave={handleCalendarMouseLeave}
                />
            )}
        </div>
    )
}

export default DateRangePicker
