import React from 'react'
import styles from './CalendarDay.module.css';

/**
 * CalendarDay — один день в сетке календаря.
 *
 * @param {Object}      props
 * @param {number}      props.day          — число месяца
 * @param {Date}        props.date         — объект даты
 * @param {boolean}     props.isOtherMonth — день соседнего месяца
 * @param {boolean}     props.isStart      — начало диапазона
 * @param {boolean}     props.isEnd        — конец диапазона
 * @param {boolean}     props.isInRange    — внутри диапазона
 * @param {boolean}     props.isToday
 * @param {function}    props.onClick
 * @param {function}    props.onMouseEnter
 */
function CalendarDay({
  day,
  date,
  isOtherMonth = false,
  isStart      = false,
  isEnd        = false,
  isInRange    = false,
  isToday      = false,
  onClick,
  onMouseEnter,
}) {
  const wrapperClasses = [
    styles.wrapper,
    isInRange ? styles.inRange    : '',
    isStart   ? styles.startEdge  : '',
    isEnd     ? styles.endEdge    : '',
  ].filter(Boolean).join(' ');

  const dayClasses = [
    styles.day,
    isStart      ? styles.start      : '',
    isEnd        ? styles.end        : '',
    isToday      ? styles.today      : '',
    isOtherMonth ? styles.otherMonth : '',
  ].filter(Boolean).join(' ');

  return (
    <div className={wrapperClasses}>
      <button
        type="button"
        className={dayClasses}
        onClick={() => onClick && onClick(date)}
        onMouseEnter={() => onMouseEnter && onMouseEnter(date)}
        aria-label={date ? date.toLocaleDateString('ru-RU') : undefined}
        aria-pressed={isStart || isEnd}
      >
        {day}
      </button>
    </div>
  );
}

export default CalendarDay;
