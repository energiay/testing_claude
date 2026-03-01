import React from "react"

import Image from './Image'
import getSrcFromName from '@App/libs/getSrcFromName'
import Classes from "./Header.module.css"

function Header({name=""}) {
    return (
        <div className={Classes.Header}>
            <div className={Classes.title}>
                <div>
                    Обученность по ключевым темам персонализированного обучения
                </div>
            </div>
            <Image name="header" />
        </div>
    )
}

export default Header
