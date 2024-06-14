// src/services/httpClient.ts

interface HttpClient {
    get<T>(url: string): Promise<T>;
  }
  
  class AxiosHttpClient implements HttpClient {
    private axios = require('axios');
  
    async get<T>(url: string): Promise<T> {
      const response = await this.axios.get(url);
      return response.data;
    }
  }
  
  class GotHttpClient implements HttpClient {
    private got = require('got');
  
    async get<T>(url: string): Promise<T> {
      const response = await this.got(url);
      return JSON.parse(response.body);
    }
  }
  
  export { HttpClient, AxiosHttpClient, GotHttpClient };
  