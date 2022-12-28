import { Field, ObjectType, Int } from '@nestjs/graphql';


@ObjectType()
export class ProductEntity {

    @Field( () => String, { nullable: true } )
    title: string;

    @Field( () => Int, { nullable: true } )
    price: number;

    @Field( () => String, { nullable: true } )
    description: string;

    @Field( () => String, { nullable: true } )
    slug: string;

    @Field( () => Int, { nullable: true } )
    stock: number;

    @Field( () => [ String ], { nullable: true } )
    sizes: string[];

    @Field( () => String, { nullable: true } )
    gender: string;

}