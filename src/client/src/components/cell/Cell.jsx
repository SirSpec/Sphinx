import React from 'react';
import PropTypes from "prop-types";

import styles from "./cell"

const Cell = ({ cell, onValueChange }) => {
    function onChangeHandler(event) {
        let value = event.target.value;

        if (value.match("^[1-9]$")) {
            onValueChange(cell.row, cell.column, value)
        }
        else if (value === "") {
            onValueChange(cell.row, cell.column, 0)
        }
    }

    return (
        <li className={styles.cell}>
            <input className={styles.input} value={cell.value != 0 ? cell.value : ""} onChange={onChangeHandler} />
        </li>
    );
};

Cell.propTypes = {
    cell: PropTypes.shape({
        row: PropTypes.number.isRequired,
        column: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired
    }).isRequired,
    onValueChange: PropTypes.func.isRequired
};

export default Cell;