import React from 'react'
import styles from './Breadcrumbs.module.css'

import getData from './getData'
import Breadcrumb from './Breadcrumb'


function Breadcrumbs({ breadcrumbs, get }) {
    const click = getData(get)

    return (
        <div className={styles.breadcrumbs}>
            {breadcrumbs.map((item, index) => {
                // дефолтовые значения
                let fnClick = () => click(item.id)  // клик по сотруднику
                let fnClose = () => {}              // нет клика по крестику (X)

                // если элемент последний
                const last = index === breadcrumbs.length - 1
                if (last) {
                    fnClick = () => {} // нет клика по сотруднику
                    fnClose = () => click(breadcrumbs[index-1].id) // клик по X
                }

                // если элемент всего один
                const isOneElem = breadcrumbs.length === 1
                if (isOneElem) {
                    fnClick = () => {} // нет клика по сотруднику
                    fnClose = () => {} // нет клика по крестику (X)
                }

                return (
                    <Breadcrumb key={item.id}
                        text={item.fullname}
                        click={fnClick}
                        close={fnClose}
                        last={last}
                        isOneElem={isOneElem}
                    />
                )
            })}
        </div>
    )
}

export default Breadcrumbs
