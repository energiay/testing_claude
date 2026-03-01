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

/**
 * Очищает кэш и открывает библиотеку кода.
 * @param {boolean} isDev - Указывает, следует ли использовать dev-версию файла.
 * @returns {object} Результат открытия библиотеки кода.
 */
function clear(isDev) {
    var path = 'x-local://wt/web/custom_projects/boss_personal_lk/'
    var file = 'boss_personal_lk_lib.js'
    if (isDev === true) {
        file = 'boss_personal_lk_lib_dev.js'
    }

    DropFormsCache(path + file)

    return OpenCodeLib(path + file)
}

function getLevel(userTE) {
    var curPositionCommonId = userTE.position_id.ForeignElem.position_common_id
    switch (curPositionCommonId) {
        case 6246751193719380759:
            return { level: 'RMS', title: 'РМС' }
        case 6246751206973385222:
            return { level: 'RN', title: 'РН' }
        case 6246751198244726443:
            return { level: 'RGO', title: 'РГО' }
        default:
            return { level: 'SP', title: 'Специалист офиса' }
    }
}

function shortName(fullname) {
    arrName = String(fullname).split(' ')
    var i = 0
    var shortName = ''
    var arrCount = ArrayCount(arrName)
    while (i < arrCount) {
        if (i == 0) {
            shortName = arrName[0]
        } else {
            shortName += ' ' + StrLeftCharRange(arrName[i], 1) + '.'
        }
        i++
    }
    return shortName
}

function getChilds(userID) {
    var result = []
    var ssql =
        'SELECT object_id AS id, \n' +
        'object_name as fullname \n' +
        'FROM func_managers AS fs \n' +
        'LEFT JOIN collaborators AS cs ON cs.id=fs.person_id \n' +
        "WHERE fs.[catalog] = 'collaborator' \n" +
        '  AND cs.is_dismiss=0 \n' +
        '  AND fs.person_id = ' +
        OptInt(userID, 0)

    var arrChilds = XQuery('sql: ' + ssql)

    if (ArrayOptFirstElem(arrChilds) == undefined) {
        return []
    }

    for (child in arrChilds) {
        result.push({
            id: String(child.id),
            fullname: String(shortName(child.fullname))
        })
    }
    return result
}

function getBoss(userID) {
    var result = []
    var ssql =
        'SELECT person_id AS id, \n' +
        'person_fullname as fullname \n' +
        'FROM func_managers AS fs \n' +
        'LEFT JOIN collaborators AS cs ON cs.id=fs.person_id \n' +
        "WHERE fs.[catalog] = 'collaborator' \n" +
        '  AND cs.is_dismiss=0 \n' +
        "  AND cs.position_name NOT LIKE '%Директор%' \n" +
        '  AND fs.object_id = ' +
        OptInt(userID, 0)
    var arrBoss = XQuery('sql: ' + ssql)
    var boss = ArrayOptFirstElem(arrBoss)

    if (boss == undefined) {
        return []
    }

    result.push({
        id: String(boss.id),
        fullname: String(shortName(boss.fullname))
    })

    return result
}

function getDashboard(level, userId, userTE) {
    switch (level.level) {
        case 'RMS':
            childs = getChilds(userId)
            breadcrumbs = [
                {
                    id: userId,
                    fullname: shortName(userTE.fullname)
                }
            ]
            result = {
                breadcrumbs: breadcrumbs,
                filters: {
                    title: level.title,
                    users: childs
                }
            }
            break
        case 'RN':
            bosses = getBoss(userId)
            childs = getChilds(userId)
            bosses.push({
                id: userId,
                fullname: shortName(userTE.fullname)
            })
            result = {
                breadcrumbs: bosses,
                filters: {
                    title: level.title,
                    users: childs
                }
            }
            break
        case 'RGO':
            bosses = getBoss(userId)
            mainBoss = getBoss(bosses[0].id)
            breadcrumbs = ArrayUnion(mainBoss, bosses)
            breadcrumbs.push({
                id: userId,
                fullname: shortName(userTE.fullname)
            })
            result = {
                breadcrumbs: breadcrumbs,
                filters: {
                    title: level.title,
                    users: []
                }
            }
            break
        default:
            result = {
                breadcrumbs: [],
                filters: {
                    title: level.title,
                    users: []
                }
            }
    }

    return result
}

/**
 * Получает основные данные.
 * @param {object} settings - Настройки для получения данных.
 * @returns {object} Объект с основными данными.
 */
function getMainData(settings) {
    var userId = 6527788531247822057 //РМС - Медведев Алексей
    //var userId = settings.user_id
    var userDoc = tools.open_doc(userId)
    var userTE = userDoc.TopElem

    var level = getLevel(userTE)
    var result = getDashboard(level, userId, userTE)
    result.metrics = [
        {
            code: 'gross_sim',
            name: 'Gross sim',
            value: 72,
            tasks: []
        },
        {
            code: 'product_revenue',
            name: 'Товарная выручка',
            value: 54,
            tasks: []
        },
        {
            code: 'finance_revenue',
            name: 'Финансовая выручка',
            value: 41,
            tasks: []
        }
    ]

    return result
}

/**
 * Возвращает фиктивные данные для приложения
 * @returns {object} Объект с данными: breadcrumbs, filters, metrics.
 */
function getMainDammy(json) {
    addLog(json)
    var settings = ParseJson(json)

    if (settings.tab == 'educations') {
        return getEducationsDammy()
    }

    if (settings.tab == 'tasks') {
        return getTasksDammy()
    }

    return { error: 'zhora' }
}

function getTasksDammy() {
    return {
        breadcrumbs: [
            {
                id: '1',
                fullname: 'Зазулин Д.С.'
            },
            {
                id: '2',
                fullname: 'Чернявская А.С.'
            }
        ],
        main: {
            title: 'РГО',
            total: {
                assigned: 291,
                completed: 119,
                percent: '30%'
            },
            items: [
                {
                    id: '1',
                    fullname: 'Воронцова Иван Иванович',
                    shortname: 'Воронцова А. С.',
                    assigned: 95,
                    completed: 35,
                    percent: '95%'
                },
                {
                    id: '2',
                    fullname: 'Воронцова Иван Иванович',
                    shortname: 'Воронцова А. С.',
                    assigned: 62,
                    completed: 26,
                    percent: '62%'
                },
                {
                    id: '3',
                    fullname: 'Воронцова Иван Иванович',
                    shortname: 'Воронцова А. С.',
                    assigned: 39,
                    completed: 22,
                    percent: '39%'
                },
                {
                    id: '4',
                    fullname: 'Воронцова Иван Иванович',
                    shortname: 'Воронцова А. С.',
                    assigned: 47,
                    completed: 17,
                    percent: '47%'
                },
                {
                    id: '5',
                    fullname: 'Воронцова Иван Иванович',
                    shortname: 'Воронцова А. С.',
                    assigned: 50,
                    completed: 25,
                    percent: '50%'
                }
            ]
        }
    }
}

function getEducationsDammy() {
    return {
        breadcrumbs: [
            {
                id: '1',
                fullname: 'Зазулин Д.С.'
            },
            {
                id: '2',
                fullname: 'Чернявская А.С.'
            }
        ],
        metrics: [
            {
                code: 'gross_sim',
                name: 'Gross sim',
                value: 72,
                offices: [
                    {
                        id: '1111111111111111111',
                        code: '7L36000',
                        name: 'zhora00',
                        value: 24,
                        users: [
                            {
                                id: 'u1111111111111111111',
                                fullname: 'Ханин О.В.',
                                value: 30
                            },
                            {
                                id: 'u2222222222222222222',
                                fullname: 'Пузиков Р.В.',
                                value: 18
                            }
                        ]
                    },
                    {
                        id: '2222222222222222222',
                        code: '6628007',
                        name: 'zhora07',
                        value: 41,
                        users: [
                            {
                                id: 'u1111111111111111111',
                                fullname: 'Ханин О.В.',
                                value: 30
                            },
                            {
                                id: 'u2222222222222222222',
                                fullname: 'Пузиков Р.В.',
                                value: 18
                            }
                        ]
                    },
                    {
                        id: '3333333333333333333',
                        code: '66280181',
                        name: 'zhora18',
                        value: 33,
                        users: [
                            {
                                id: 'u1111111111111111111',
                                fullname: 'Ханин О.В.',
                                value: 30
                            },
                            {
                                id: 'u2222222222222222222',
                                fullname: 'Пузиков Р.В.',
                                value: 18
                            }
                        ]
                    },
                    {
                        id: '4444444444444444444',
                        code: '66280072',
                        name: 'zhora07',
                        value: 41,
                        users: [
                            {
                                id: 'u1111111111111111111',
                                fullname: 'Ханин О.В.',
                                value: 30
                            },
                            {
                                id: 'u2222222222222222222',
                                fullname: 'Пузиков Р.В.',
                                value: 18
                            }
                        ]
                    },
                    {
                        id: '5555555555555555555',
                        code: '66280183',
                        name: 'zhora18',
                        value: 33,
                        users: [
                            {
                                id: 'u1111111111111111111',
                                fullname: 'Ханин О.В.',
                                value: 30
                            },
                            {
                                id: 'u2222222222222222222',
                                fullname: 'Пузиков Р.В.',
                                value: 18
                            }
                        ]
                    }
                ]
            },
            {
                code: 'product_revenue',
                name: 'Товарная выручка',
                value: 54,
                offices: [
                    {
                        id: '1111111111111111111',
                        code: '7L36000',
                        name: 'zhora00',
                        value: 67,
                        users: [
                            {
                                id: 'u1111111111111111111',
                                fullname: 'Ханин О.В.',
                                value: 13
                            },
                            {
                                id: 'u2222222222222222222',
                                fullname: 'Пузиков Р.В.',
                                value: 46
                            }
                        ]
                    },
                    {
                        id: '2222222222222222222',
                        code: '6628007',
                        name: 'zhora07',
                        value: 49,
                        users: [
                            {
                                id: 'u1111111111111111111',
                                fullname: 'Ханин О.В.',
                                value: 13
                            },
                            {
                                id: 'u2222222222222222222',
                                fullname: 'Пузиков Р.В.',
                                value: 46
                            }
                        ]
                    },
                    {
                        id: '3333333333333333333',
                        code: '66280181',
                        name: 'zhora18',
                        value: 30,
                        users: [
                            {
                                id: 'u1111111111111111111',
                                fullname: 'Ханин О.В.',
                                value: 13
                            },
                            {
                                id: 'u2222222222222222222',
                                fullname: 'Пузиков Р.В.',
                                value: 46
                            }
                        ]
                    },
                    {
                        id: '4444444444444444444',
                        code: '66280072',
                        name: 'zhora07',
                        value: 44,
                        users: [
                            {
                                id: 'u1111111111111111111',
                                fullname: 'Ханин О.В.',
                                value: 13
                            },
                            {
                                id: 'u2222222222222222222',
                                fullname: 'Пузиков Р.В.',
                                value: 46
                            }
                        ]
                    },
                    {
                        id: '5555555555555555555',
                        code: '66280183',
                        name: 'zhora18',
                        value: 33,
                        users: [
                            {
                                id: 'u1111111111111111111',
                                fullname: 'Ханин О.В.',
                                value: 13
                            },
                            {
                                id: 'u2222222222222222222',
                                fullname: 'Пузиков Р.В.',
                                value: 46
                            }
                        ]
                    }
                ]
            },
            {
                code: 'finance_revenue',
                name: 'Финансовая выручка',
                value: 41,
                offices: [
                    {
                        id: '1111111111111111111',
                        code: '7L36000',
                        name: 'zhora00',
                        value: 89,
                        users: [
                            {
                                id: 'u1111111111111111111',
                                fullname: 'Ханин О.В.',
                                value: 18
                            },
                            {
                                id: 'u2222222222222222222',
                                fullname: 'Пузиков Р.В.',
                                value: 30
                            }
                        ]
                    },
                    {
                        id: '2222222222222222222',
                        code: '6628007',
                        name: 'zhora07',
                        value: 34,
                        users: [
                            {
                                id: 'u1111111111111111111',
                                fullname: 'Ханин О.В.',
                                value: 18
                            },
                            {
                                id: 'u2222222222222222222',
                                fullname: 'Пузиков Р.В.',
                                value: 30
                            }
                        ]
                    },
                    {
                        id: '3333333333333333333',
                        code: '66280181',
                        name: 'zhora18',
                        value: 51,
                        users: [
                            {
                                id: 'u1111111111111111111',
                                fullname: 'Ханин О.В.',
                                value: 18
                            },
                            {
                                id: 'u2222222222222222222',
                                fullname: 'Пузиков Р.В.',
                                value: 30
                            }
                        ]
                    },
                    {
                        id: '4444444444444444444',
                        code: '66280072',
                        name: 'zhora07',
                        value: 20,
                        users: [
                            {
                                id: 'u1111111111111111111',
                                fullname: 'Ханин О.В.',
                                value: 18
                            },
                            {
                                id: 'u2222222222222222222',
                                fullname: 'Пузиков Р.В.',
                                value: 30
                            }
                        ]
                    },
                    {
                        id: '5555555555555555555',
                        code: '66280183',
                        name: 'zhora18',
                        value: 33,
                        users: [
                            {
                                id: 'u1111111111111111111',
                                fullname: 'Ханин О.В.',
                                value: 18
                            },
                            {
                                id: 'u2222222222222222222',
                                fullname: 'Пузиков Р.В.',
                                value: 30
                            }
                        ]
                    }
                ]
            }
        ],
        filters: {
            title: 'РГО',
            users: [
                { id: '1', fullname: 'Воронцова Д.С.' },
                { id: '2', fullname: 'Запруднова Л.Д.' },
                { id: '3', fullname: 'Юдина Н.И.' },
                { id: '4', fullname: 'Малхасян К.Д.' },
                { id: '5', fullname: 'Мозговой Д.А.' }
            ]
        }
    }
}

/**
 * Возвращает фиктивные данные для приложения
 * @returns {object} Объект с данными: breadcrumbs, filters, metrics.
 */
function getModalWindowDammy() {
    return [
        {
            type: 'course',
            name: 'Курс СДО',
            tasks: [
                {
                    name: 'Тарифные планы Билайн',
                    duration: '40 мин',
                    users: [
                        {
                            id: '111',
                            fullname: 'Ханин О.В.',
                            status: {
                                code: 'success',
                                name: 'Успушно'
                            }
                        },
                        {
                            id: '222',
                            fullname: 'Пузиков Р.В.',
                            status: {
                                code: 'failed',
                                name: 'Неуспешно'
                            }
                        }
                    ]
                },
                {
                    name: 'Тариф «план б.»',
                    duration: '20 мин',
                    users: [
                        {
                            id: '111',
                            fullname: 'Ханин О.В.',
                            status: {
                                code: 'success',
                                name: 'Успушно'
                            }
                        }
                    ]
                },
                {
                    name: 'Название обучения',
                    duration: '15 мин',
                    users: [
                        {
                            id: '111',
                            fullname: 'Ханин О.В.',
                            status: {
                                code: 'success',
                                name: 'Успушно'
                            }
                        },
                        {
                            id: '222',
                            fullname: 'Пузиков Р.В.',
                            status: {
                                code: 'failed',
                                name: 'Неуспешно'
                            }
                        },
                        {
                            id: '333',
                            fullname: 'Пузиков Р.В.',
                            status: {
                                code: 'failed',
                                name: 'Неуспешно'
                            }
                        }
                    ]
                },
                {
                    name: 'Название обучения',
                    duration: '15 мин',
                    users: [
                        {
                            id: '111',
                            fullname: 'Ханин О.В.',
                            status: {
                                code: 'success',
                                name: 'Успушно'
                            }
                        }
                    ]
                }
            ]
        },
        {
            type: 'event',
            name: 'Вебинар',
            tasks: [
                {
                    name: 'Тарифные планы Билайн',
                    duration: '40 мин'
                },
                {
                    name: 'Тариф «план б.»',
                    duration: '20 мин'
                },
                {
                    name: 'Название обучения',
                    duration: '15 мин'
                },
                {
                    name: 'Название обучения',
                    duration: '15 мин'
                }
            ]
        },
        {
            type: 'skillcup',
            name: 'Тренировка Skill Cup',
            tasks: [
                {
                    name: 'Тарифные планы Билайн',
                    duration: '40 мин'
                },
                {
                    name: 'Тариф «план б.»',
                    duration: '20 мин'
                },
                {
                    name: 'Название обучения',
                    duration: '15 мин'
                },
                {
                    name: 'Название обучения',
                    duration: '15 мин'
                }
            ]
        }
    ]
}
