/**
 * Строит массив дней для отображения в сетке календаря (пн–вс).
 * Включает дни предыдущего и следующего месяцев для заполнения строк.
 */
export function buildCalendarDays(year, month) {
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const startOffset = (firstDay.getDay() + 6) % 7
    const lastDayOfWeek = (lastDay.getDay() + 6) % 7 // вс→6, пн→0 ... сб→5
    const endOffset = lastDayOfWeek === 6 ? 0 : 6 - lastDayOfWeek

    const days = []

    for (let i = startOffset - 1; i >= 0; i--)
        days.push({ date: new Date(year, month, -i), isOtherMonth: true })

    for (let d = 1; d <= lastDay.getDate(); d++)
        days.push({ date: new Date(year, month, d), isOtherMonth: false })

    for (let d = 1; d <= endOffset; d++)
        days.push({ date: new Date(year, month + 1, d), isOtherMonth: true })

    return days
}

/** Сравнивает две даты без учёта времени */
export function isSameDay(a, b) {
    if (!a || !b) return false
    return (
        a.getFullYear() === b.getFullYear() &&
        a.getMonth() === b.getMonth() &&
        a.getDate() === b.getDate()
    )
}

/** Проверяет, попадает ли date в диапазон [start, end] (порядок не важен) */
export function isInRange(date, start, end) {
    if (!start || !end) return false
    const [from, to] = start <= end ? [start, end] : [end, start]
    const t = date.getTime()
    return t > from.getTime() && t < to.getTime()
}

/** Форматирует дату в DD.MM.YYYY */
export function formatDate(date) {
    if (!date) return ''
    const d = String(date.getDate()).padStart(2, '0')
    const m = String(date.getMonth() + 1).padStart(2, '0')
    const y = date.getFullYear()

    return `${d}.${m}.${y}`
}

