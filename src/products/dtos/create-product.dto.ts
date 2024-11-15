import {
  IsString,
  IsNumber,
  Min,
  Max,
} from 'class-validator';

export class CreateProductDto{

  @IsString()
  productname: string;

  @IsNumber()
  price: number;

  @IsString()
  sku: string;

  @IsNumber()
  tax: number;
  
  @IsNumber()
  @Min(2)
  @Max(150)
  quantity: number;

}