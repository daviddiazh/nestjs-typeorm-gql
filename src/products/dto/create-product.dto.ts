import { IsArray, IsIn, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from 'class-validator';

export class CreateProductDto {

    @IsNotEmpty()
    @IsString()
    title: string;

    @IsOptional()
    @IsNumber()
    @IsPositive()
    price?: number;

    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsString()
    slug?: string;

    @IsOptional()
    @IsNumber()
    stock?: number;

    @IsNotEmpty()
    @IsArray()
    @IsString({ each: true })
    sizes: string[];

    @IsNotEmpty()
    @IsIn(['men', 'women', 'kid', 'unisex'])
    gender: string;

}
