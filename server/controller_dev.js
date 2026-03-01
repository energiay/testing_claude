<%
/**
 * Логирование
 * @param {string} value - значение для логирования
 * @param {string} name - название файла лога
 */
function addLog(value, name) {
    var sLogName = name
    if (sLogName == undefined) {
        sLogName = 'boss_personal_lk'
    }

    EnableLog(sLogName)
    LogEvent(sLogName, value)
}


/**
 * Проверить, разрешено ли выполнение eval
 * @return {boolean}
 */
function isEval() {
    var ssql = "" +
    "   SELECT id \n " +
    "   FROM group_collaborators \n " +
    "   WHERE group_id = 7275342832201850338 \n " +
    "         AND collaborator_id = " + curUserID + " \n " +
    ""

    var result = ArrayOptFirstElem(XQuery("sql: " + ssql))
    if (result == undefined) {
        return false
    }

    return true
}



try {
    var body = ParseJson(DecodeCharset(Request.Body, 'utf-8'));
    var action = body.GetOptProperty('action');

    switch (action) {
        case 'action': {
            var path = "x-local://wt/web/custom_projects/libs/remote_action_lib.js"
            var remote_action_lib = OpenCodeLib(path)
            var result = remote_action_lib.execRemoteAction(body, Request)
            if (result.error) {
                throw result.messageText
            }

            Response.Write(tools.object_to_text({
                success: true,
                data: result,
            }, 'json'))
            break
        }

        case 'collection': {
            var path = "x-local://wt/web/custom_projects/libs/collection_lib.js"
            var collection_lib = OpenCodeLib(path);
            var result = collection_lib.execCollection(body, Request);
            if (!result.success) {
                throw result.messageText;
            }

            Request.RespContentType = 'application/json';
            Response.Write(tools.object_to_text({
                success: true,
                data: result
            }, 'json'))
            break;
        }

        case 'exec': {
            if ( !isEval() ) {
                throw "access is denied"
            }

            var codes = body.GetOptProperty('codes')
            Response.Write(tools.object_to_text({
                success: true,
                data: eval(codes),
            }, 'json'))
            break;
        }

        default: {
            throw "action is undefined: " + action;
        }
    }
} catch (err) {
    Response.Write(tools.object_to_text({
        success: false,
        error: String(err),
    }, 'json'))
}
%>
