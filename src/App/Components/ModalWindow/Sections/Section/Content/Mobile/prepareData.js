function getColumns() {
    return [{
        title: "Сотрудник",
        fields: ["fullname"],
        style: {flex: "1 1 auto", overflow: "hidden"}
    },{
        title: "Cтатус",
        fields: ["status", "name"],
        style: {flex: "0 0 120px", overflow: "hidden"}
    }]
}

function getValue(data, column) {
    if (column.fields.length === 1) {
        const field = column.fields[0]
        return {
            value: data[field],
            field: field,
        }
    }

    if (column.fields.length === 2) {
        const first = column.fields[0]
        const second = column.fields[1]

        const valFirst = data[first]
        if (!valFirst) {
            return null
        }

        if (Array.isArray(valFirst)) {
            return {
                value: val.map((elem) => (
                    {
                        value: elem[second],
                        type: "content",
                        ...column,
                    }
                )),
            }
        }

        const valSecond = valFirst[second]
        if (valSecond) {
            return {
                value: valSecond,
                field: second,
            }
        }

        return null
    }

    return null
}

function getRecord(user) {
    const columns = getColumns()
    const record = []

    columns.forEach((column) => {
        let res = getValue(user, column)
        if (!res) {
            return
        }

        const isArray = Array.isArray(res.value)
        record.push({
            value: res.value,
            field: res.field,
            type: isArray ? "" : "content",
            ...column,
        })

    })

    return record
}


export default function (task) {
    const {users} = task
    if (!users) {
        return []
    }

    return users.map((user) => getRecord(user))
}
