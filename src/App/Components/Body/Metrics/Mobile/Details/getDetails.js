export default (metric) => {
    if (!metric.offices) {
        return null
    }

    let details = {}

    // преобразуем метрику и офисы в один объект
    // с доступами по коду метрики и коду офиса
    // <код_метрики>_<код_офиса>
    details = metric.offices.reduce((accum, office) => {
        return {
            ...accum,
            [metric.code + "_" + office.code]: {...office}
        }
    }, details)

    // добавляем пользователей с метриками в details
    // с доступами по коду метрики и идентификатору пользователя
    // <код_метрики>_<user_id>
    for (let office of metric.offices) {
        details = office.users.reduce((accum, user) => {
            return {
                ...accum,
                [metric.code + "_" + user.id]: {...user}
            }
        }, details)
    }

    return details
}

