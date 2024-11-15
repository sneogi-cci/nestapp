import { Expose, Transform } from 'class-transformer';
import { User } from '../../users/user.entity';

export class ProductDto {
  @Expose()
  id: number;
  @Expose()
  productname: string;
  @Expose()
  price: number;
  @Expose()
  sku: string;
  @Expose()
  tax: number;
  @Expose()
  quantity: number;

  @Transform(({ obj }) => obj.user.id)
  @Expose()
  userId: number;
}
