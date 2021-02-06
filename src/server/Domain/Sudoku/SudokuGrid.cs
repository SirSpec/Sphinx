using System.Linq;

namespace Sphinx.Domain.Sudoku
{
    public class SudokuGrid
    {
        public const int GridSize = 9;
        public const int EmptySquare = 0;

        public int[][] Squares { get; }

        public SudokuGrid(int[][] squares) =>
            Squares = squares;

        public int this[int row, int column]
        {
            get => Squares[row][column];
            set => Squares[row][column] = value;
        }

        public bool CanBePlacedIntoSquare(int row, int column, int digit) =>
            !IsInRow(row, digit) && !IsInColumn(column, digit) && !IsInBox(row, column, digit);

        private bool IsInRow(int row, int digit) =>
            Squares[row].Any(square => square == digit);

        private bool IsInColumn(int column, int digit) =>
            Squares.Any(square => square[column] == digit);

        private bool IsInBox(int row, int column, int digit)
        {
            const int BoxSize = 3;
            int rowRange = row - row % BoxSize;
            int columnRange = column - column % BoxSize;

            for (int i = rowRange; i < rowRange + BoxSize; i++)
                for (int j = columnRange; j < columnRange + BoxSize; j++)
                    if (this[i, j] == digit)
                        return true;

            return false;
        }
    }
}
