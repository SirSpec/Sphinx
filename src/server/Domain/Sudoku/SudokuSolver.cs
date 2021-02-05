namespace Sphinx.Domain.Sudoku
{
    public class SudokuSolver
    {
        private readonly int[][] squares;
        private const int EmptySquare = 0;
        private const int GridSize = 9;

        public int[][] Squares => squares;

        public SudokuSolver(int[][] squares) =>
            this.squares = squares;

        public bool TryToSolve()
        {
            for (int row = 0; row < GridSize; row++)
            {
                for (int column = 0; column < GridSize; column++)
                {
                    if (squares[row][column] == EmptySquare)
                    {
                        for (int number = 1; number <= GridSize; number++)
                        {
                            if (CanBePlacedIntoSquare(row, column, number))
                            {
                                squares[row][column] = number;

                                if (TryToSolve()) return true;
                                else squares[row][column] = EmptySquare;
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
            for (int i = 0; i < GridSize; i++)
                if (squares[row][i] == digit)
                    return true;

            return false;
        }

        private bool IsInColumn(int col, int column)
        {
            for (int i = 0; i < GridSize; i++)
                if (squares[i][col] == column)
                    return true;

            return false;
        }

        private bool IsInBox(int row, int column, int digit)
        {
            const int BoxSize = 3;
            int rowRange = row - row % BoxSize;
            int columnRange = column - column % BoxSize;

            for (int i = rowRange; i < rowRange + BoxSize; i++)
                for (int j = columnRange; j < columnRange + BoxSize; j++)
                    if (squares[i][j] == digit)
                        return true;

            return false;
        }
    }
}
