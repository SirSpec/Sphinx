import SudokuActions from "../actions/sudokuActions"

export function setSudoku(sudoku) {
    return {
        type: SudokuActions.SET_SUDOKU,
        sudoku
    }
}

export function changeCell(row, column, value) {
    return {
        type: SudokuActions.CHANGE_CELL,
        row,
        column,
        value
    }
}