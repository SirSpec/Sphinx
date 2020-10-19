using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;

namespace Sphinx.Infrastructure.WebApi.Hubs
{
    public class Sudoku
    {
        public int[][] Cells => new int[][]
        {
            new int[]{1,2,0,4,5,6,7,8,9},
            new int[]{1,2,3,4,5,6,7,8,9},
            new int[]{1,2,3,4,5,6,7,8,9},
            new int[]{1,2,3,4,5,6,7,8,9},
            new int[]{1,2,3,4,5,6,7,8,9},
            new int[]{1,2,3,4,5,6,7,8,9},
            new int[]{1,2,3,4,5,6,7,8,9},
            new int[]{1,2,3,4,5,6,7,8,9},
            new int[]{1,2,3,4,5,6,7,8,9},
        };
    }

    public class MapHub : Hub
    {
        public async Task SendMap()
        {
            await Clients.All.SendAsync("ReceiveMap", new Sudoku());
            // , new JsonSerializerOptions()
            // {
            //     PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
            // }));
        }
    }
}
