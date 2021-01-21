namespace Sphinx.Domain.Sudoku
{
    public class SudokuSolver
    {
        private int[][] squares;
        private const int EMPTY = 0;
        private const int GRID_SIZE = 9;

        public int[][] Squares => squares;

        public SudokuSolver(int[][] squares) =>
            this.squares = squares;

        public bool TryToSolve()
        {
            for (int row = 0; row < GRID_SIZE; row++)
            {
                for (int column = 0; column < GRID_SIZE; column++)
                {
                    if (squares[row][column] == EMPTY)
                    {
                        for (int number = 1; number <= GRID_SIZE; number++)
                        {
                            if (CanBePlacedIntoSquare(row, column, number))
                            {
                                squares[row][column] = number;

                                if (TryToSolve())
                                {
                                    return true;
                                }
                                else
                                {
                                    squares[row][column] = EMPTY;
                                }
                            }
                        }

                        return false;
                    }
                }
            }

            return true;
        }

        private bool CanBePlacedIntoSquare(int row, int column, int digit) =>
            !IsInRow(row, digit) && !IsInColumn(column, digit) && !IsInBox(row, column, digit);

        private bool IsInRow(int row, int digit)
        {
            for (int i = 0; i < GRID_SIZE; i++)
            {
                if (squares[row][i] == digit)
                    return true;
            }

            return false;
        }

        private bool IsInColumn(int col, int column)
        {
            for (int i = 0; i < GRID_SIZE; i++)
            {
                if (squares[i][col] == column)
                    return true;
            }

            return false;
        }

        private bool IsInBox(int row, int column, int digit)
        {
            const int BOX_SIZE = 3;
            int rowRange = row - row % BOX_SIZE;
            int columnRange = column - column % BOX_SIZE;

            for (int i = rowRange; i < rowRange + BOX_SIZE; i++)
            {
                for (int j = columnRange; j < columnRange + BOX_SIZE; j++)
                {
                    if (squares[i][j] == digit)
                        return true;
                }
            }
            
            return false;
        }
    }
}
