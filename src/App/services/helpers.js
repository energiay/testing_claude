/**
 * Распарсить поля json у объекта
 * @param {object} obj - исходный объект
 * @param {array} fields - поля, которые требуют парсинга
 * @return {object}
 */
function parseJson(obj, fields) {
    var result = obj

    for (var i = 0; i <= fields.length; i++) {
        var value = result[fields[i]]
        if (!value) {
            continue
        }

        result[fields[i]] = JSON.parse(value)
    }

    return result
}

/**
 * Получение параметров из адресной строки
 * @param {string} name - параметр в адресной строке
 * @param {string} url - адрес (необязательный параметр)
 * @return {string}
 */
function getQueryParameter(name, url) {
    let sUrl = url
    if (!sUrl) {
        sUrl = window.location.href
    }

    const paramName = name.replace(/[\[\]]/g, '\\$&')
    const regex = new RegExp('[?&]' + paramName + '(=([^&#]*)|&|#|$)')

    const results = regex.exec(sUrl)
    if (!results) {
        return null
    }

    if (!results[2]) {
        return ''
    }

    return decodeURIComponent(results[2].replace(/\+/g, ' '))
}

function debounce(callback, delay = 250) {
    let timeoutId
    return (...args) => {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
            timeoutId = null
            callback(...args)
        }, delay)
    }
}

export { parseJson, getQueryParameter, debounce }
