import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return [
      { name: 'Test', email: 'test@test.com' },
      { name: 'Test2', email: 'test2@test.com' },
      { name: 'Test3', email: 'test3@test.com' },
    ];
  }

  @Get('posts')
  getUsersPosts() {
    return [
      {
        name: 'Test',
        email: 'test@test.com',
        posts: [
          { id: 1, title: 'Post 1' },
          { id: 2, title: 'Post 2' },
        ],
      },
      {
        name: 'Test3',
        email: 'test3@test.com',
        posts: [
          { id: 3, title: 'Post 3' },
          { id: 2, title: 'Post 4' },
        ],
      },
    ];
  }

  @Get('post/comments')
  getPostComments() {
    return {
      id: 1,
      title: 'Post 1',
      comments: [
        { userId: 1, description: 'Nice bro!' },
        { userId: 2, description: 'WoW!' },
      ],
    };
  }
}
