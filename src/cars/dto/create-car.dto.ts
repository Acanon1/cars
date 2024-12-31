import { Type } from "class-transformer";
import { IsNumber, IsString, Min } from "class-validator";

export class CreateCarDto {
    @IsString()
    public maker: string;

    @IsString()
    public model: string;

    @IsString()
    public trim: string;

    @Min(0)
    @IsNumber({
        maxDecimalPlaces: 4,
    })
    @Type(() => Number)
    public price: string;
}

