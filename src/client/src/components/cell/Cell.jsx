import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";

import styles from "./cell"

const Cell = (props) => {
    return (
        <div className={styles.cell}>
            <input className={styles.input} value={props.value} onChange={props.onValueChange} />
        </div>
    );
};

Cell.propTypes = {
    value: PropTypes.number.isRequired,
    onValueChange: PropTypes.func.isRequired
};

export default Cell;