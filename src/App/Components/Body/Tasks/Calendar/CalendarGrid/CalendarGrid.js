import React from 'react'
import CalendarDay from '../CalendarDay';
import { buildCalendarDays, isSameDay, isInRange } from '../dateUtils';
import styles from './CalendarGrid.module.css';

const WEEKDAYS_RU = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

/**
 * CalendarGrid — сетка дней с заголовками дней недели.
 *
 * @param {Object}    props
 * @param {number}    props.year
 * @param {number}    props.month          — 0-based
 * @param {Date|null} props.startDate
 * @param {Date|null} props.endDate
 * @param {Date|null} props.hoveredDate    — для предпросмотра диапазона
 * @param {function}  props.onDayClick
 * @param {function}  props.onDayMouseEnter
 */
function CalendarGrid({
  year,
  month,
  startDate,
  endDate,
  hoveredDate,
  onDayClick,
  onDayMouseEnter,
}) {
  const today = new Date();
  const days  = buildCalendarDays(year, month);

  // Пока endDate не выбран — показываем предпросмотр по ховеру
  const previewEnd = !endDate && hoveredDate ? hoveredDate : endDate;

  return (
    <div className={styles.grid}>
      <div className={styles.weekdays}>
        {WEEKDAYS_RU.map((wd) => (
          <div key={wd} className={styles.weekday}>{wd}</div>
        ))}
      </div>

      <div className={styles.days}>
        {days.map(({ date, isOtherMonth }, idx) => {
          const isStart    = startDate  ? isSameDay(date, startDate)  : false;
          const isEnd      = previewEnd ? isSameDay(date, previewEnd) : false;
          const isToday    = isSameDay(date, today);
          const inRange    = !!(startDate && previewEnd && isInRange(date, startDate, previewEnd));

          return (
            <CalendarDay
              key={idx}
              day={date.getDate()}
              date={date}
              isOtherMonth={isOtherMonth}
              isStart={isStart}
              isEnd={isEnd}
              isInRange={inRange}
              isToday={isToday}
              onClick={onDayClick}
              onMouseEnter={onDayMouseEnter}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CalendarGrid;
