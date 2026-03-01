import React, { useState, useEffect } from 'react'
import useApiRequest from '@hooks/useApiRequest'

export default (settings) => {
    // TODO: не стал выносить выборку в параметры шаблона
    // подумаю, нужно ли это
    //const COLLECTION_ID = '7245062114660316590'
    const COLLECTION_ID = '7255384365353907076' // dev выборка
    const { url_to_api, program_id } = settings

    const [data, setData] = useState(null)

    // запрос к серверу
    const [run] = useApiRequest((result) => {
        if (!result.success) {
            console.log('ERROR: ошибка получения первичных данных')
            return
        }

        const [res] = result.results

        setData(res)
    })

    // получение данных с сервера
    const getData = (params) => {
        setData(null)

        run(url_to_api, {
            action: 'collection',
            id: COLLECTION_ID,
            wvars: { settings: JSON.stringify(params) }
        })
    }

    return [data, getData]
}



