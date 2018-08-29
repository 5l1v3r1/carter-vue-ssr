namespace basic
{
  using System;
  using System.Dynamic;
  using System.Threading.Tasks;
  using Carter;
  using Carter.Response;
  using Microsoft.AspNetCore.Http;
  using Microsoft.AspNetCore.NodeServices;
  using Microsoft.AspNetCore.Routing;
  using Microsoft.Extensions.Logging;
  using Newtonsoft.Json;

  public class HomeModule : CarterModule
  {
    private class RenderResponse
    {
      public string response { get; set; }
      public int code { get; set; }
    }
    private readonly INodeServices nodeServices;
    private readonly ILogger<HomeModule> logger;

    public HomeModule(INodeServices nodeServices, ILogger<HomeModule> logger)
    {
      this.nodeServices = nodeServices;
      this.logger = logger;

      Get("/api/message", async (req, res, rd) =>
      {
        await res.WriteAsync(DateTime.Now.ToString());
      });

      Get("{*url}", Render);
    }

    private async Task Render(HttpRequest req, HttpResponse res, RouteData rd)
    {
      dynamic expando = new ExpandoObject();
      expando.url = rd.Values["url"];
      RenderResponse response = await this.nodeServices.InvokeAsync<RenderResponse>(@"aspnetshim.js", expando).ConfigureAwait(false);
      res.StatusCode = response.code;
      res.ContentType = "text/html";
      await res.WriteAsync(response.response ?? "");
    }
  }
}
