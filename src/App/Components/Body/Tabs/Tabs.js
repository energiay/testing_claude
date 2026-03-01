import React, { useState } from 'react';
import Tab from './Tab';

import styles from './Tabs.module.css';
import {TABS} from './consts.js'


function Tabs({code, click}) {
    const [activeIndex, setActiveIndex] = useState(() => (
        TABS.findIndex((elem) => elem.code === code)
    ))

    const handleClick = (index) => {
        setActiveIndex(index)
        if (click) {
            click(TABS[index])
        }
    }

    return (
        <div className={styles.tabs}>
            {TABS.map((item, index) => (
                <Tab key={index}
                    isActive={activeIndex === index}
                    onClick={() => handleClick(index)}
                >
                    {item.name}
                </Tab>
            ))}
        </div>
    );
}

export default Tabs;
