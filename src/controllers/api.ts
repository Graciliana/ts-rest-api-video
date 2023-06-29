import { Get, Route } from 'tsoa';

interface ApiResponse {
  message: string;
}

@Route('api')
export default class ApiController {
  @Get('/')
  public async getMessage(): Promise<ApiResponse> {
    return {
      message:
        'Welcome to the Node.js & TypeScript API w/ Azure Database for PostgreSQL!',
    };
  }
}
