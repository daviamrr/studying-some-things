import api from "./api";

interface Response {
  statusCode: string,
  message: string
}

export interface AuthSchema {
  login: string,
  password: string
}

export class AuthService {
  constructor(
    readonly http = api
  ) { }

  async auth({ ...data }: AuthSchema): Promise<Response> {
    const response = await this.http.post('/', {
      ...data
    })
    return response.data
  }
}