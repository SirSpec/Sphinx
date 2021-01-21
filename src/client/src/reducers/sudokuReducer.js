import SudokuActions from '../actions/sudokuActions';

var emptySudoku = [...Array(9)].map(x => Array(9).fill(0));

function sudoku(state = emptySudoku, action) {
    switch (action.type) {
        case SudokuActions.SET_SUDOKU:
            return action.sudoku;
        case SudokuActions.CHANGE_CELL:
            var newState = [
                ...state
            ];

            newState[action.row][action.column] = isNaN(parseInt(action.value))
                ? 0
                : parseInt(action.value);

            return newState;
        default:
            return state;
    }
}

export default sudoku