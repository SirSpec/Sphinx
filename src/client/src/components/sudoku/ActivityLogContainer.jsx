import { connect } from 'react-redux'
import Sudoku from './Sudoku'

const LogsNumberPerPage = 5

const mapStateToProps = state => {
    return {
        logs: state.logs,
        pageSize: LogsNumberPerPage
    }
}

const ActivityLogContainer = connect(mapStateToProps)(Sudoku)

export default ActivityLogContainer