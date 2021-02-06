using Microsoft.AspNetCore.SignalR;
using Sphinx.Domain.Sudoku;
using System.Threading.Tasks;

namespace Sphinx.Infrastructure.WebApi.Hubs
{
    public class SudokuSolverHub : Hub
    {
        private const string ReceiveSudokuMethod = "ReceiveSudoku";
        private readonly SudokuSolver sudokuSolver;

        public SudokuSolverHub(SudokuSolver sudokuSolver)
        {
            this.sudokuSolver = sudokuSolver;
        }

        public async Task Solve(int[][] board)
        {
            var grid = sudokuSolver.Solve(board);

            await Clients.Caller.SendAsync(ReceiveSudokuMethod, grid.Squares);
        }
    }
}