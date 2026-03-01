function getValue(details, code, office, user) {
    if (office && details[code + "_" + office.code]) {
        return details[code + "_" + office.code].value
    }

    if (user && details[code + "_" + user.id]) {
        return details[code + "_" + user.id].value
    }

    return 0
}

function getObjectId (office, user) {
    if (!!office) {
        return office.id
    }

    if (!!user) {
        return user.id
    }

    return null
}


export default function getDetail(settings) {
    const {metrics, metric, index, details, params, office, user} = settings

    // показать скрыть вертикальную черту
    const isShow = metrics.length - 1 !== index

    const metricCode = metric.code
    const color = params.metrics[metricCode].color

    const val = getValue(details, metricCode, office, user)

    const object_id = getObjectId(office, user)

    return {
        show: isShow,
        val,
        color,
        click: () => params.modal.toggle(metric, object_id),
    }
}
