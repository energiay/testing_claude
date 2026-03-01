import React from 'react';
import styles from './Tab.module.css';

function Tab({ children, isActive, onClick }) {
    return (
        <button
            className={`${styles.tab} ${isActive ? styles.active : ''}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default Tab;
