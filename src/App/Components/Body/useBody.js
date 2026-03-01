import React, { useState, useEffect } from 'react'
import { EDUCATIONS, TASKS } from './Tabs/consts.js'

export default (settings) => {
    // активная вкладка
    const [tab, setTab] = useState(TASKS)

    return {
        tab: {
            code: tab,
            click: (tab) => setTab(tab.code),
        }
    }
}
