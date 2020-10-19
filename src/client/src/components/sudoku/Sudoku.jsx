import React from 'react';
import PropTypes from "prop-types";

import styles from "./sudoku"

import Cell from "../cell/Cell"

const Sudoku = ({ cells, changeCell }) => {
    return (
        <ul className={styles.sudoku}>
            {cells.map((row, rowIndex) =>
                row.map((cell, columnIndex) =>
                    <Cell
                        key={`${rowIndex}_${columnIndex}`}
                        cell={{
                            value: cell,
                            row: rowIndex,
                            column: columnIndex
                        }}
                        onValueChange={changeCell} />
                )
            )}
        </ul>
    );
}

Sudoku.propTypes = {
    cells: PropTypes.arrayOf(PropTypes.array.isRequired).isRequired,
    changeCell: PropTypes.func.isRequired
}

export default Sudoku;