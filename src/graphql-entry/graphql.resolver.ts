import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { ProductEntity } from './entity/entities';
import { CreateProductInputDto } from './dto/inputs.dto';
import { ProductsService } from '../products/products.service';


@Resolver()
export class GraphQLResolver {

    constructor(
        private readonly productService: ProductsService,
    ){}

    @Mutation( () => ProductEntity, { name: 'createProduct' } )
    createProduct (@Args('createProductDto') createProductDto: CreateProductInputDto) {
        return this.productService.create( createProductDto );
    }

    @Query( () => [ ProductEntity ], { name: 'findAllProducts' })
    findAllProducts () {
        return this.productService.findAll();
    }

    @Query( () => ProductEntity, { name: 'findProductById' } )
    findProductById (@Args('id') id: string) {
        return this.productService.findOne( id )
    }

    @Query( () => ProductEntity, { name: 'findByTitleOrSlug' } )
    findByTitleOrSlug (@Args('term') term: string) {
        return this.productService.findOneByTitleOrSlug( term );
    }

}