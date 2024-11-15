import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dtos/create-product.dto';
import { Product } from './product.entity';
import { User } from 'src/users/user.entity';

@Injectable()
export class ProductService {
  constructor(@InjectRepository(Product) private repo: Repository<Product>) {}

  create(productDto: CreateProductDto, user: User){
    const product = this.repo.create(productDto);
    product.user = user;
    return this.repo.save(product);
  }

  async findProductById(id: number): Promise<Product>{
    if (!id) {
      return null;
    }
    const product = await this.repo.findOneBy({id});
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return product;
  }

}