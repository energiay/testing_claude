import React, { useState, useEffect } from 'react'
import useApiRequest from '@hooks/useApiRequest'

export default (modal, settings) => {
    // TODO: не стал выносить выборку в параметры шаблона
    // подумаю, нужно ли это
    const COLLECTION_ID = '7252921312217102653'
    const { url_to_api, program_id } = settings
    const { metric } = modal

    const [content, setContent] = useState(null)

    // запрос к серверу
    const [run] = useApiRequest((result) => {
        if (!result.success) {
            console.log('ERROR: ошибка получения первичных данных')
            return
        }

        const [res] = result.results

        setContent(res)
    })

    useEffect(() => {
        if (!modal.open) {
            setContent(null)
            return
        }

        var params = {
            settings: JSON.stringify({
                program_id: program_id,
                metric_code: metric.code,
            })
        }

        if (modal.objectId !== null) {
            params = {
                settings: JSON.stringify({
                    program_id: program_id,
                    metric_code: metric.code,
                    object_id: modal.objectId,
                })
            }
        }

        setContent(null)
        run(url_to_api, {
            action: 'collection',
            id: COLLECTION_ID,
            wvars: {...params}
        })
    }, [modal.open])

    return [content]
}
