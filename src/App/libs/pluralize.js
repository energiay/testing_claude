/**
 * Склоняет слово в зависимости от числа
 * @param {number} n          — число
 * @param {string[]} forms    — массив из 3 форм:
 * @returns {string} правильная форма слова
 *
 * @example
 * pluralize(1,   ["кот", "кота", "котов"])     // → "кот"
 * pluralize(2,   ["кот", "кота", "котов"])     // → "кота"
 * pluralize(5,   ["кот", "кота", "котов"])     // → "котов"
 * pluralize(20,   ["кот", "кота", "котов"])    // → "котов"
 * pluralize(21,  ["кот", "кота", "котов"])     // → "кот"
 * pluralize(0,   ["мероприятие", "мероприятия", "мероприятий"])// → "мероприятий"
 */
export default function pluralize(n, forms) {
    if (!Array.isArray(forms) || forms.length !== 3) {
        throw new Error('Ожидается массив ровно из 3 форм склонения')
    }

    // Приводим к целому числу и берём модуль
    const num = Math.abs(Math.round(n))

    // Последние две цифры — для обработки 11–14
    const lastTwo = num % 100

    // Если попадаем в зону 11–14 → всегда множественное родительный
    if (lastTwo >= 11 && lastTwo <= 14) {
        return forms[2]
    }

    // Последняя цифра
    const lastDigit = num % 10

    if (lastDigit === 1) {
        return forms[0] // кот, день, яблоко, мероприятие
    }

    if (lastDigit >= 2 && lastDigit <= 4) {
        return forms[1] // кота, дня, яблока, мероприятия
    }

    // 0, 5–9 → множественное родительный
    return forms[2] // котов, дней, яблок, мероприятий
}
