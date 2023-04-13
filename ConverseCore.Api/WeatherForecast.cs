namespace webapi;

public class WeatherForecast
{
    public DateOnly Date { get; set; }

    public Temperature Temperature { get; set; } = new();

    public string? Summary { get; set; }
}

public class Temperature
{
    public int Celsius { get; set; }

    public int Fahrenheit => 32 + (int)(Celsius / 0.5556);
}