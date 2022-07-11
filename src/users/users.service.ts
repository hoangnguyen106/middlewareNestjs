import { Injectable } from '@nestjs/common';
import { SerializeUser, User } from './types';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      username: 'hoan123',
      password: 'hoan123',
    },
    {
      id: 2,
      username: 'oan123',
      password: 'oan123',
    },
    {
      id: 3,
      username: 'dad123',
      password: 'dad123',
    },
    {
      id: 4,
      username: 'h123',
      password: 'h123',
    },
  ];

  getUsers() {
    return this.users.map((user) => new SerializeUser(user));
  }

  getUsersByUsername(username: string) {
    return this.users.find((user) => user.username === username);
  }

  getUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }
}
