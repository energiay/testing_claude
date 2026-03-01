import React from "react"

import Table from './Table'
import Mobile from './Mobile'
import useResize from '@App/hooks/useResize'

function Content({tasks}) {
    const [width] = useResize()
    if (width <= 1024) {
        return <Mobile tasks={tasks} />
    }

    return <Table tasks={tasks} />
}

export default Content
