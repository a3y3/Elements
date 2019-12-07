export class Weather {
    Date: string;
    Day: {
        HasPrecipitation: boolean,
        IconPhrase: string,
        PrecipitationIntensity: string
    };
    Night: {
        HasPrecipitation: boolean,
        IconPhrase: string,
        PrecipitationIntensity: string
    };
    Temperature: {
        Maximum: {
            Value: number,
            Unit: string
        }
        Minimum: {
            Value: number,
            Unit: string
        }
    };
}