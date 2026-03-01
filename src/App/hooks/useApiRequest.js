import React, {useRef, useEffect} from "react"
import useFetch from '@hooks/useFetch';


export default (callback) => {
    const [{isLoading, response, error}, doFetch] = useFetch()
    const pull = useRef([]) // делаем очередь из запросов


    /**
     * Запустить запрос к серверу
     * @param {string} url
     * @param {object} fetchParams
     */
    const run = (url, fetchParams) => {
        if (isLoading) {
            return
        }

        doFetch(url, fetchParams)
    }


    // по очереди выполняем каждый следующий запрос из пула запросов
    useEffect(() => {
        if (isLoading || !pull.current.length) {
            return
        }

        const param = pull.current.shift()
        doFetch(context.settings.url_to_api, param)
    }, [isLoading])


    useEffect(() => {
        if (!isLoading && response) {
            callback(response)
        }
    }, [response])


    // показать ошибки в web-интерфейсе
    useEffect(() => {
        if (error) {
            console.log("ERROR: ", error)
        }
    }, [error])

    return [run]
}
