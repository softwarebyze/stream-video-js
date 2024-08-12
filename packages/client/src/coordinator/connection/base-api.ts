import { StreamClient } from './client';

export class BaseApi {
  constructor(private client: StreamClient) {}

  sendRequest = async <T>(
    method: string,
    url: string,
    pathParams?: Record<string, string>,
    queryParams?: Record<string, any>,
    body?: any,
  ) => {
    if (pathParams) {
      Object.keys(pathParams).forEach((paramName) => {
        url = url.replace(`{${paramName}}`, pathParams[paramName]);
      });
    }
    const response = await this.client.doAxiosRequest(method, url, body, {
      params: queryParams,
    });

    // TODO: expose rate limit info here
    return { body: response as T, metadata: undefined };
  };
}
