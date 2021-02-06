using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Options;
using Sphinx.Domain.Sudoku;
using Sphinx.Infrastructure.WebApi.Configurations;

namespace Sphinx.Infrastructure.WebApi
{
    public class Startup
    {
        private readonly IConfiguration configuration;

        public Startup(IConfiguration configuration) =>
            this.configuration = configuration;

        public void ConfigureServices(IServiceCollection services)
        {
            services.Configure<SudokuSolverHubOptions>(
                configuration.GetSection(SudokuSolverHubOptions.SudokuSolverHub));

            services.AddTransient<SudokuSolver>();

            services.AddCors();
            services.AddSignalR();
        }

        public void Configure(
            IApplicationBuilder app,
            IWebHostEnvironment env,
            IOptions<SudokuSolverHubOptions> sudokuSolverHubOptions)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors(builder =>
                builder.WithOrigins(sudokuSolverHubOptions.Value.Url)
                    .AllowAnyHeader()
                    .WithMethods("GET", "POST")
                    .AllowCredentials()
            );

            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapHub<Hubs.SudokuSolverHub>("/hub");
            });
        }
    }
}
