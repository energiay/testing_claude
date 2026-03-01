import React, { useState, useCallback } from 'react';

/**
 * useDateRangePicker — хук с логикой выбора диапазона дат.
 *
 * @param {Object} init
 * @param {Date|null} init.start — начальная дата по умолчанию
 * @param {Date|null} init.end   — конечная дата по умолчанию
 */
function useDateRangePicker(init = {}) {
  const today = new Date();

  const [startDate,   setStartDate]   = useState(init.start || null);
  const [endDate,     setEndDate]     = useState(init.end   || null);
  const [hoveredDate, setHoveredDate] = useState(null);
  const [isOpen,      setIsOpen]      = useState(false);
  const [viewYear,    setViewYear]    = useState(today.getFullYear());
  const [viewMonth,   setViewMonth]   = useState(today.getMonth());

  const handleDayClick = useCallback((date) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(date);
      setEndDate(null);
      setHoveredDate(null);
    } else {
      if (date < startDate) {
        setEndDate(startDate);
        setStartDate(date);
      } else {
        setEndDate(date);
      }
      setIsOpen(false);
    }
  }, [startDate, endDate]);

  const handleDayMouseEnter      = useCallback((date) => setHoveredDate(date), []);
  const handleCalendarMouseLeave = useCallback(() => setHoveredDate(null), []);

  const goToPrevMonth = useCallback(() => {
    setViewMonth((m) => {
      if (m === 0) { setViewYear((y) => y - 1); return 11; }
      return m - 1;
    });
  }, []);

  const goToNextMonth = useCallback(() => {
    setViewMonth((m) => {
      if (m === 11) { setViewYear((y) => y + 1); return 0; }
      return m + 1;
    });
  }, []);

  const toggleCalendar = useCallback(() => setIsOpen((v) => !v), []);
  const closeCalendar  = useCallback(() => setIsOpen(false), []);

  return {
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
    closeCalendar,
  };
}

export default useDateRangePicker;
