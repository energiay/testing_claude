import {useState, useEffect} from 'react'
import useData from '@App/hooks/useData'
import getDate from './getDate'

export default (settings, tab) => {
    const { programs } = settings

    // изначальный запрос к серверу
    const [requestParams, setRequestParams] = useState(
        () => getRequestParams({...getDate(), programs, tab})
    )

    // data - данные с сервера 
    // getData - запрос к серверу
    const [data, getData] = useData(settings)

    // изменить пользователя, а значит и данные под пользователем
    const editUser = (params) => {
        const {userId} = params
        const {user_id} = requestParams
        if (userId !== user_id) {
            const {start: timestampStart, end: timestampEnd} = requestParams
            const curParams = getRequestParams({
                ...requestParams,
                timestampStart,
                timestampEnd,
                user_id: userId,
            })
            setRequestParams(curParams)
        }
    }

    // изменить даты
    const editDate = (params) => {
        const {startDate: start, endDate: end} = params
        const localDate = getDate({start, end})
        const curParams = getRequestParams({
            ...requestParams,
            ...localDate,
        })

        // Обновляем только если дата реально изменилась
        const {start: rStart, end: rEnd} = requestParams
        if (curParams.start !== rStart || curParams.end !== rEnd) {
            setRequestParams(curParams)
        }
    }

    // запрос к серверу за данными
    useEffect(() => {
        //console.log("request", requestParams)
        getData(requestParams)
    }, [requestParams])

    return {
        date: {
            start: unixtimestampToDate(requestParams.start),
            end: unixtimestampToDate(requestParams.end),
            click: editDate,
        },
        data,
        getData: editUser,
    }
}

// приведение unixtimestamp в дату
function unixtimestampToDate(date) {
    if (typeof date === 'number' && Number.isFinite(date)) {
        return new Date(date * 1000)
    }

    return date
}

// получение параметров для серверного запроса
function getRequestParams(params) {
    const {user_id=null, timestampStart, timestampEnd, programs, tab} = params
    const base = {
        tab,
        programs,
        start: timestampStart,
        end: timestampEnd,
    }

    if (user_id !== null) {
        return {
            ...base,
            user_id,
        }
    }

    return base
}
