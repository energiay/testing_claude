/**
 * Логирование
 * @param {string} value - значение для логирования
 * @param {string} name - название файла лога
 */
function addLog(value, name) {
    var sLogName = name
    if (sLogName == undefined) {
        sLogName = 'boss_personal_lk_lib'
    }

    EnableLog(sLogName)
    LogEvent(sLogName, value)
}




// entry point
try {
    addLog("begin")
    var path = 'x-local://wt/web/custom_projects/boss_personal_lk/'
    var file = 'boss_personal_lk_lib.js'
    var LIB = OpenCodeLib(path + file).clear()

    var res = LIB.getMainData(settings)

    RESULT = [res]
    ERROR = 0;
    MESSAGE = ""
    addLog("end")
}
catch (err) {
    addLog("ERROR: " + err)
    ERROR = 1
    MESSAGE = String(err)
    RESULT = []
}

