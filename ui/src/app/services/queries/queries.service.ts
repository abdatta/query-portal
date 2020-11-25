import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetQueryDto, CreateQueryDto } from 'dto/query.dto';

@Injectable({
  providedIn: 'root'
})
export class QueriesService {

  constructor(private httpClient: HttpClient) { }

  getQueries(): Promise<GetQueryDto[]> {
    return this.httpClient.get<GetQueryDto[]>('/api/query').toPromise();
  }

  async askQuery(to: string, body: string, jwtToken?: string, undisclosed?: boolean): Promise<GetQueryDto> {
    const query: CreateQueryDto = { to, body, undisclosed };
    const headers = jwtToken ? { Authorization: 'Bearer ' + jwtToken } : {};
    return this.httpClient.post<GetQueryDto>('/api/query', query, { headers }).toPromise();
  }

  getQuery(id: string): Promise<GetQueryDto> {
    return this.httpClient.get<GetQueryDto>('/api/query/' + id).toPromise();
  }
}
