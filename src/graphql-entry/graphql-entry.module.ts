import { Module } from '@nestjs/common';
import { ProductsService } from 'src/products/products.service';
import { ProductsModule } from '../products/products.module';
import { GraphQLResolver } from './graphql.resolver';

@Module({
    imports: [ ProductsModule ],
    providers: [  GraphQLResolver, ProductsService ]
})
export class GraphqlEntryModule {}
