namespace basic
{
  using System.IO;
  using Carter;
  using Microsoft.AspNetCore.Builder;
  using Microsoft.AspNetCore.Http;
  using Microsoft.AspNetCore.NodeServices;
  using Microsoft.Extensions.DependencyInjection;
  using Microsoft.Extensions.FileProviders;

  public class Startup
  {
    public void ConfigureServices(IServiceCollection services)
    {
      services.AddCarter();

      services.AddSingleton<INodeServices>(p =>
          NodeServicesFactory.CreateNodeServices(
              new NodeServicesOptions(services.BuildServiceProvider())
              {
                ProjectPath = @"wwwroot/"
              }));

    }

    public void Configure(IApplicationBuilder app)
    {
      app.UseStaticFiles(new StaticFileOptions
      {
        FileProvider = new PhysicalFileProvider(
          Path.Combine(Directory.GetCurrentDirectory(), "wwwroot/dist")
        ),
        RequestPath = "/dist"
      });
      app.UseCarter();
    }
  }
}
