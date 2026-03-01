import React, { useState, useEffect } from 'react'
import useData from '@App/hooks/useData'
import useModalWindow from './useModalWindow'

export default (settings, tab) => {
    const { programs } = settings
    const params = getParams(settings)

    // управление модальным окном
    const [modal, toggle] = useModalWindow()

    // получение основных данных
    var [data, getData] = useData(settings)

    // первичное получение данных с сервера
    useEffect(() => getData(getRequestParams({programs, tab})), [])

    const request = (params) => {
        const requestParams = getRequestParams({...params, programs, tab})
        getData(requestParams)
    }

    return {
        params: {
            modal: { toggle, ...modal },
            ...params,
        },
        data,
        getData: request,
    }
}

// метрики из элемента шаблона - тут нам нужны цвета/градиент
function getParams(settings) {
    const params = { metrics: {} }

    // метрики из элемента шаблона - тут нам нужны цвета/градиент
    try {
        params.metrics = JSON.parse(settings.metrics).reduce((acc, item) => {
            acc[item.code] = item
            return acc
        }, {})
    } catch (err) {}

    return params
}

// параметры для полета на сервер
function getRequestParams(params) {
    const {userId, tab, programs} = params

    if (userId && tab) {
        return {
            tab,
            programs,
            user_id: userId,
        }
    }

    if (!userId && tab) {
        return {
            tab,
            programs,
        }
    }

    if (userId && !tab) {
        return {
            tab,
            programs,
            user_id: userId,
        }
    }

    return {
        tab,
        programs,
    }
}
