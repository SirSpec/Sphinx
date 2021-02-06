using System;

namespace Sphinx.Domain.Sudoku
{
    public class SudokuSolver
    {
        public SudokuGrid Solve(int[][] squares)
        {
            var grid = new SudokuGrid(squares);

            return TryToSolveRecurrently()
                ? grid
                : throw new ArgumentException($"Sudoku cannot be solved.");

            bool TryToSolveRecurrently()
            {
                for (int row = 0; row < SudokuGrid.GridSize; row++)
                    for (int column = 0; column < SudokuGrid.GridSize; column++)
                        if (grid[row, column] == SudokuGrid.EmptySquare)
                        {
                            for (int digit = 1; digit <= SudokuGrid.GridSize; digit++)
                                if (grid.CanBePlacedIntoSquare(row, column, digit))
                                {
                                    grid[row, column] = digit;

                                    if (TryToSolveRecurrently()) return true;
                                    else grid[row, column] = SudokuGrid.EmptySquare;
                                }

                            return false;
                        }

                return true;
            }
        }
    }
}
