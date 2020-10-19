import { connect } from 'react-redux'
import { setSudoku, changeCell } from "../../actionCreators/sudokuActionCreators"

import Dashboard from './Dashboard'

const mapStateToProps = state => {
    return {
        sudoku: state.sudoku
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setSudoku: sudoku => dispatch(setSudoku(sudoku)),
        changeCell: (row, column, value) => dispatch(changeCell(row, column, value))
    }
}

const DashboardContainer = connect(mapStateToProps, mapDispatchToProps)(Dashboard)

export default DashboardContainer