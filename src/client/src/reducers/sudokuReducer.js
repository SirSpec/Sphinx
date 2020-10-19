import SudokuActions from '../actions/sudokuActions';

function sudoku(state = {}, action) {
    switch (action.type) {
        case SudokuActions.SET_SUDOKU:
            return action.sudoku;
        case SudokuActions.CHANGE_CELL:
            var newState = {
                ...state   
            };

            newState.cells[action.row][action.column] = isNaN(parseInt(action.value)) ? 0 : parseInt(action.value);
            return newState;
        default:
            return state;
    }
}

export default sudoku