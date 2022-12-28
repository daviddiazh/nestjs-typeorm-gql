import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { ProductEntity } from './entity/entities';
import { CreateProductInputDto } from './dto/inputs.dto';
import { ProductsService } from '../products/products.service';


@Resolver()
export class GraphQLResolver {

    constructor(
        private readonly productService: ProductsService,
    ){}

    @Query( () => String, { name: 'helloWorld' } )
    hello () {
        return 'Hola mundo'
    }


    @Mutation( () => ProductEntity, { name: 'createProduct' } )
    createProduct (@Args('createProductDto') createProductDto: CreateProductInputDto) {
        return this.productService.create( createProductDto );
    }

}