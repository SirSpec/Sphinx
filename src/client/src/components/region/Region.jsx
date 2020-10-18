import React from 'react';

import styles from "./region"

const Region = ({ children }) => {
    return (
        <div className={styles.region}>
            {children}
        </div>
    );
};

export default Region;