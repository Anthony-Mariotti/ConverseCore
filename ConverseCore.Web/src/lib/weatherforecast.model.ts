export interface IWeatherForecast {
    date: Date;
    temperature: ITemperature;
    summary: string;
}

export interface ITemperature {
    celsius: number;
    fahrenheit: number;
}
