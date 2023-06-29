interface ApiResponse {
  message: string;
}

export default class ApiController {
  public async getMessage(): Promise<ApiResponse> {
    return {
      message: 'API response!',
    };
  }
}
