import React from 'react';
import PropTypes from "prop-types";

import styles from "./cell"

const Cell = ({ value, onValueChange }) => {
    return (
        <div className={styles.cell}>
            <input className={styles.input} value={value} onChange={onValueChange} />
        </div>
    );
};

Cell.propTypes = {
    value: PropTypes.number.isRequired,
    onValueChange: PropTypes.func.isRequired
};

export default Cell;