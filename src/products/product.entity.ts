import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../users/user.entity';

@Entity()
export class Product {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  productname: string;

  @Column()
  price: number;

  @Column()
  sku: string;

  @Column()
  tax: number;
  
  @Column()
  quantity: number;

  @ManyToOne(() => User, (user) => user.product)
  user: User;

}