import { Field, InputType, Int } from "@nestjs/graphql";
import { IsNotEmpty, IsString, IsOptional, IsNumber, IsPositive, IsArray, IsIn } from 'class-validator';

@InputType()
export class CreateProductInputDto {

    @Field( () => String )
    @IsNotEmpty()
    @IsString()
    title: string;

    @Field( () => Int, { nullable: true } )
    @IsOptional()
    @IsNumber()
    @IsPositive()
    price: number;

    @Field( () => String, { nullable: true } )
    @IsOptional()
    @IsString()
    description: string;

    @Field( () => String, { nullable: true } )
    @IsOptional()
    @IsString()
    slug: string;

    @Field( () => Int, { nullable: true } )
    @IsOptional()
    @IsNumber()
    stock: number;

    @Field( () => [ String ] )
    @IsNotEmpty()
    @IsArray()
    @IsString({ each: true })
    sizes: string[];

    @Field( () => String )
    @IsNotEmpty()
    @IsIn(['men', 'women', 'kid', 'unisex'])
    gender: string;

}