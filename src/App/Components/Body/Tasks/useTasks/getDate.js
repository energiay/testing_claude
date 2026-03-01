import { useState } from 'react'

export default (times) => {
    const date = times || getDefDate()
    return prepareDate(date)
}

function getDefDate() {
    const now = new Date()
    const twoMonthsAgo = new Date()
    twoMonthsAgo.setMonth(now.getMonth() - 2)

    return { start: twoMonthsAgo, end: now }
}

function prepareDate({ start, end }) {
    const startDate = new Date(start)
    const endDate = new Date(end)

    startDate.setHours(0, 0, 0, 0)
    endDate.setHours(0, 0, 0, 0)

    return {
        timestampStart: Math.floor(startDate.getTime() / 1000),
        timestampEnd: Math.floor(endDate.getTime() / 1000),
        start: startDate,
        end: endDate
    }
}
