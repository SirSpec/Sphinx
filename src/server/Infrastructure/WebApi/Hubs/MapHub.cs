using Microsoft.AspNetCore.SignalR;
using Sphinx.Domain.Sudoku;
using System.Threading.Tasks;

namespace Sphinx.Infrastructure.WebApi.Hubs
{
    public class MapHub : Hub
    {
        public async Task Solve(int[][] board)
        {
            var sudokuSolver = new SudokuSolver(board);
            sudokuSolver.TryToSolve();

            await Clients.All.SendAsync("ReceiveSudoku", sudokuSolver.Squares);
        }
    }
}