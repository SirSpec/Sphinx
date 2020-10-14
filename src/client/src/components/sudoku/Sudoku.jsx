import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";

import styles from "./sudoku"

import Region from "../region/Region"

const Sudoku = (props) => {
    return (
        <div className={styles.sudoku}>
            <Region></Region>
            <Region></Region>
            <Region></Region>

            <Region></Region>
            <Region></Region>
            <Region></Region>

            <Region></Region>
            <Region></Region>
            <Region></Region>
        </div>
    );
};

Sudoku.propTypes = {
};

export default Sudoku;