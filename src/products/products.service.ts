import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {

  private readonly logger = new Logger('ProductsService');

  constructor(
    @InjectRepository( Product )
    private readonly productRepository: Repository<Product>
  ){}

  async create(createProductDto: CreateProductDto) {
    try {

      const product = this.productRepository.create( createProductDto );
      await this.productRepository.save( product );

      return product;
    } catch (error) {
      this.handleDBExceptions( error );
    }
  }

  async findAll() {
    return await this.productRepository.find();
  }

  async findOne(id: string) {
    try {
      const product = await this.productRepository.findOneBy({ id });

      if( !product ){
        throw new NotFoundException(`Product with ID ${ id } not found`);
      }

      return product;
    } catch (error) {
      this.handleDBExceptions( error )
    }
  }

  async findOneByTitleOrSlug (term: string) {
    try {
      let product: Product;
      const queryBuilder = this.productRepository.createQueryBuilder();

      product = await queryBuilder
        .where(
          'title= :title or slug= :slug', 
          {
            title: term,
            slug: term,
          }
        )
        .getOne();

      if( !product ){
        throw new NotFoundException(`Product with ${ term } not found`);
      }

      return product;
    } catch (error) {
      this.handleDBExceptions( error )
    }
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  async remove(id: number) {
    return `This action removes a #${id} product`;
  }


  private handleDBExceptions (error: any) {
    // console.log(error)

    if( error.code === '23505' ) {
      throw new BadRequestException(error.detail)
    }

    if( error.code === '22P02' ) {
      throw new NotFoundException('Product ID not found')
    }

    this.logger.debug(error);
    throw new InternalServerErrorException('Unexpected error, make sure of check server logs')
  }

}
