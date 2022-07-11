/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dtos/CreateCustomer.dto';
import { Customer } from './types/Customer';

@Injectable()
export class CustomersService {
  private customers: Customer[] = [
    {
      id: 1,
      email: 'hoanghs@gmial.com',
      name: 'hoang nguyen',
    },
    {
      id: 2,
      email: 'admaa@gmial.com',
      name: 'admama nguyen',
    },
    {
      id: 3,
      email: 'daeva@gmial.com',
      name: 'daeva nguyen',
    },
  ];

  findCustomerById(id: number) {
    return this.customers.find((user) => user.id === id);
  }

  createCustomer(customerDto: CreateCustomerDto) {
    this.customers.push(customerDto);
  }

  getAllCustomers(){
    return this.customers;
  }
}
