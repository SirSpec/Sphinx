import React from 'react';
import PropTypes from "prop-types";

import styles from "./sudoku"

import Region from "../region/Region"
import Cell from "../cell/Cell"

const Sudoku = ({ cells }) => {
    return (
        <div className={styles.sudoku}>
            {cells.map((row, index) =>
                <Region key={index}>
                    {row.map(cell =>
                        <Cell key={cell.id} value={cell.value} />
                    )}
                </Region>
            )}
        </div>
    );
};

Sudoku.propTypes = {
    cells: PropTypes.arrayOf(PropTypes.array.isRequired).isRequired
};

export default Sudoku;