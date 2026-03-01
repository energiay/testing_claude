export default (metrics) => {
    let details = {}

    // преобразуем все метрики и офисы в один объект
    // с доступами по коду метрики и коду офиса
    // <код_метрики>_<код_офиса>
    for (let metric of metrics) {
        if (!metric.offices) {
            return null
        }

        details = metric.offices.reduce((accum, office) => {
            return {
                ...accum,
                [metric.code + "_" + office.code]: {...office}
            }
        }, details)
    }

    // добавляем пользователей с метриками в details
    // с доступами по коду метрики и идентификатору пользователя
    // <код_метрики>_<user_id>
    for (let metric of metrics) {

        for (let office of metric.offices) {
            details = office.users.reduce((accum, user) => {
                return {
                    ...accum,
                    [metric.code + "_" + user.id]: {...user}
                }
            }, details)
        }
    }

    return details
}
