using Microsoft.AspNetCore.SignalR;
using Sphinx.Domain.Sudoku;
using System.Threading.Tasks;

namespace Sphinx.Infrastructure.WebApi.Hubs
{
    public class SudokuSolverHub : Hub
    {
        private const string ReceiveSudokuMethod = "ReceiveSudoku";

        public async Task Solve(int[][] board)
        {
            var sudokuSolver = new SudokuSolver(board);
            sudokuSolver.TryToSolve();

            await Clients.Caller.SendAsync(ReceiveSudokuMethod, sudokuSolver.Squares);
        }
    }
}