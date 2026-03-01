function getParamTable () {

    // задаем параметры для таблицы
    // эти поля, по хорошему, нужно вынести в элементы шаблона
    // что бы ими легко можно было управлять
    // Нужно сделать это как появится потребность!
    // А сейчас прибью гвоздями.
    return [{
        title: "",
        fields: ["duration"],
        style: {flex: "0 0 47px"}
    },{
        title: "Название обучения",
        fields: ["name"],
        style: {flex: "1 1 auto"}
    },{
        title: "Сотрудник",
        fields: ["users", "fullname"],
        style: {flex: "0 0 160px"}
    },{
        title: "Cтатус",
        fields: ["users", "status", "name"],
        style: {flex: "0 0 160px"}
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

        const val = data[first]
        if (!val) {
            return null
        }

        if (Array.isArray(val)) {
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

        return null
    }

    if (column.fields.length === 3) {
        const first = column.fields[0]
        const second = column.fields[1]
        const third = column.fields[2]

        const val = data[first]
        if (!val) {
            return null
        }

        if (Array.isArray(val)) {
            return {
                value: val.map((elem) => (
                    {
                        value: elem[second][third],
                        type: "content",
                        ...column,
                    }
                )),
            }
        }

        return null
    }

    return null
}

function getRecord(data, columns) {
    const record = []

    columns.forEach((column) => {
        let res = getValue(data, column)
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


export default function (tasks) {
    if (!tasks.length) {
        return null
    }

    // получить параметры для построения столбцов
    const columns = getParamTable()

    // преобразовать прилетевшие даннае в записи
    const records = tasks.map((val) => getRecord(val, columns))

    // из записей формируем заголовок для таблицы
    const header = records[0].map((rec) => {
        return {
            ...rec,
            field: "",
            value: rec.title,
            type: "head"
        }
    })

    return {records, header}
}
