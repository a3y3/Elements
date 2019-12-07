export class Weather {
    Date: string;
    Day: {
        Icon:number,
        HasPrecipitation: boolean,
        IconPhrase: string,
        PrecipitationIntensity: string
    };
    Night: {
        Icon:number,
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