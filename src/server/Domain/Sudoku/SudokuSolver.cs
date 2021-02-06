using System;

namespace Sphinx.Domain.Sudoku
{
    public class SudokuSolver
    {
        public SudokuGrid Solve(int[][] squares)
        {
            var grid = new SudokuGrid(squares);

            return Recurrency()
                ? grid
                : throw new Exception();

            bool Recurrency()
            {
                for (int row = 0; row < SudokuGrid.GridSize; row++)
                    for (int column = 0; column < SudokuGrid.GridSize; column++)
                        if (grid[row, column] == SudokuGrid.EmptySquare)
                        {
                            for (int number = 1; number <= SudokuGrid.GridSize; number++)
                                if (grid.CanBePlacedIntoSquare(row, column, number))
                                {
                                    grid[row, column] = number;

                                    if (Recurrency()) return true;
                                    else grid[row, column] = SudokuGrid.EmptySquare;
                                }

                            return false;
                        }

                return true;
            }
        }
    }
}
