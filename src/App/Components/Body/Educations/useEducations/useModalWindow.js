import {useState} from 'react'

export default () => {
    const [open, setOpen] = useState(false)
    const [metric, setMetric] = useState({})
    const [objectId, setObjectId] = useState(null)

    const toggle = (metric, object_id=null) => {
        if (open) {
            setOpen(false)
            setMetric("")
            setObjectId(null)
            return
        }

        setOpen(true)
        setMetric(metric)
        setObjectId(object_id)
    }

    return [{open, metric, objectId}, toggle]
}
