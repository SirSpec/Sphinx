import { connect } from 'react-redux'
import { setSudoku, changeCell } from "../../actionCreators/sudokuActionCreators"

import Sudoku from './Sudoku'

const mapStateToProps = state => {
    return {
        sudoku: state.sudoku,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setSudoku: sudoku => dispatch(setSudoku(sudoku)),
        changeCell: (row, column, value) => dispatch(changeCell(row, column, value)),
    }
}

const SudokuContainer = connect(mapStateToProps, mapDispatchToProps)(Sudoku)

export default SudokuContainer