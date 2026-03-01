import React from 'react'
import getSrcFromName from '@App/libs/getSrcFromName'
import useDropDown from '@App/hooks/useDropDown'

export default (section, open) => {
    const {
        type,
        name="",
        tasks=[],
    } = section

    // функционал для drop_down
    const {content, height, click} = useDropDown(open)
    const stHeight = {maxHeight: height + 'px'}

    // картинка перед названием drop_down
    const imgType = getSrcFromName(type)

    // изменяющиеся стили, что бы попасть в дизайн
    let stBorder = {}
    let stBackground = {}
    let imgDropDown = getSrcFromName('drop_down')
    if (height) {
        imgDropDown = getSrcFromName('drop_up')
        stBorder = {border: "1px solid #e8e8eb"}
        stBackground = {background: "#e8e8eb"}
    }

    return {
        content,
        stHeight,
        stBackground,
        stBorder,
        imgType,
        imgDropDown,
        name,
        click,
        tasks,
    }
}
