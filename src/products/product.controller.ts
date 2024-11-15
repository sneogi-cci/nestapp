import {
  Controller,
  Post,
  Body,
  UseGuards,
  Patch,
  Param,
  Get,
  Query
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dtos/create-product.dto';
import { AuthGuard } from 'src/guards/auth.guard';
import { Serialize } from '../interceptors/serialize.interceptor';
import { CurrentUser } from '../users/decorators/current-user.decorator';
import { AdminGuard } from '../guards/admin.guard';
import { User } from '../users/user.entity';
import { ProductDto } from './dtos/product.dto';

@Controller('products')
export class ProductController{

  constructor(private productService: ProductService) {}

  @Post()
  @UseGuards(AuthGuard)
  @Serialize(ProductDto)
  createReport(@Body() body: CreateProductDto, @CurrentUser() user: User) {
    console.log(body);
    return this.productService.create(body, user);
  }

  @Get(':id')
  findProductById(@Param('id') id: number) {
    return this.productService.findProductById(id);
  }

}