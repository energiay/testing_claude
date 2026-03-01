import header from "@img/header.svg"
import close from "@img/close.svg"
import line from "@img/line.svg"
import person from "@img/person.svg"
import filters from "@img/filters.svg"
import office from '@img/office.svg'
import mwclose from '@img/mwclose.svg'
import drop_up from '@img/drop_up.svg'
import drop_down from '@img/drop_down.svg'
import skillcup from '@img/skillcup.svg'
import event from '@img/event.svg'
import course from '@img/course.svg'
import time from '@img/time.svg'
import calendar from '@img/calendar.svg'
import calendar_left from '@img/calendar_left.svg'
import calendar_right from '@img/calendar_right.svg'



/**
 * Получить исходник файла по названию
 * @param {string} name - название картинки
 * @param {any}
 */
export default (name) => {
    const files = {
        header,
        close,
        line,
        person,
        filters,
        office,
        mwclose,
        drop_up,
        drop_down,
        skillcup,
        event,
        course,
        time,
        calendar,
        calendar_left,
        calendar_right,
    }

    return files[name]
}
