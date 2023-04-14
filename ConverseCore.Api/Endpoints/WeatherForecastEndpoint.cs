namespace webapi.Controllers;

public class WeatherForecastEndpoint : EndpointWithoutRequest<IEnumerable<WeatherForecast>>
{
    private static readonly string[] Summaries = new[]
    {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

    public override void Configure()
    {
        Get("/WeatherForecast");
        Permissions("read:weather");
    }

    public override async Task HandleAsync(CancellationToken ct)
    {
        var amount = Query<int>("count", isRequired: false);

        if (amount < 0)
        {
            AddError("Count must be greater than 0");
            await SendErrorsAsync();
        }

        if (amount == 0)
        {
            amount = 1;
        }

        await SendAsync(Enumerable.Range(1, amount).Select(index => new WeatherForecast
        {
            Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
            Temperature = new()
            {
                Celsius = Random.Shared.Next(-20, 55)
            },
            Summary = Summaries[Random.Shared.Next(Summaries.Length)]
        })
        .ToArray());
    }
}
