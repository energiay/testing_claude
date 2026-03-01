import React from 'react';
import styles from  './Spinner.module.css';

const Spinner = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className="lds-spinner">
                    <div className={`${styles.lds_double_ring}  mx-auto`}>
                        <div></div>
                        <div></div>
                        <div>
                            <div></div>
                        </div>
                        <div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Spinner;
