import { connect } from 'react-redux'
import Sudoku from './Sudoku'

const LogsNumberPerPage = 5

const mapStateToProps = state => {
    return {
        cells: [[{id: 0,value: 0},{id: 0,value: 0},{id: 0,value: 0},{id: 0,value: 0},{id: 0,value: 0},{id: 0,value: 0},{id: 0,value: 0},{id: 0,value: 0},{id: 0,value: 0},],
        [{id: 0,value: 0},{id: 0,value: 0},{id: 0,value: 0},{id: 0,value: 0},{id: 0,value: 0},{id: 0,value: 0},{id: 0,value: 0},{id: 0,value: 0},{id: 0,value: 0},],
        [{id: 0,value: 0},{id: 0,value: 0},{id: 0,value: 0},{id: 0,value: 0},{id: 0,value: 0},{id: 0,value: 0},{id: 0,value: 0},{id: 0,value: 0},{id: 0,value: 0},],
        [{id: 0,value: 0},{id: 0,value: 0},{id: 0,value: 0},{id: 0,value: 0},{id: 0,value: 0},{id: 0,value: 0},{id: 0,value: 0},{id: 0,value: 0},{id: 0,value: 0},],
        [{id: 0,value: 0},{id: 0,value: 0},{id: 0,value: 0},{id: 0,value: 0},{id: 0,value: 0},{id: 0,value: 0},{id: 0,value: 0},{id: 0,value: 0},{id: 0,value: 0},],
        [{id: 0,value: 0},{id: 0,value: 0},{id: 0,value: 0},{id: 0,value: 0},{id: 0,value: 0},{id: 0,value: 0},{id: 0,value: 0},{id: 0,value: 0},{id: 0,value: 0},],
        [{id: 0,value: 0},{id: 0,value: 0},{id: 0,value: 0},{id: 0,value: 0},{id: 0,value: 0},{id: 0,value: 0},{id: 0,value: 0},{id: 0,value: 0},{id: 0,value: 0},],
        [{id: 0,value: 0},{id: 0,value: 0},{id: 0,value: 0},{id: 0,value: 0},{id: 0,value: 0},{id: 0,value: 0},{id: 0,value: 0},{id: 0,value: 0},{id: 0,value: 0},],
        [{id: 0,value: 0},{id: 0,value: 0},{id: 0,value: 0},{id: 0,value: 0},{id: 0,value: 0},{id: 0,value: 0},{id: 0,value: 0},{id: 0,value: 0},{id: 0,value: 0},],],
        pageSize: LogsNumberPerPage
    }
}

const ActivityLogContainer = connect(mapStateToProps)(Sudoku)

export default ActivityLogContainer