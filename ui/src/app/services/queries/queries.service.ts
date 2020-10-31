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

  askQuery(to: string, from: string, body: string, undisclosed?: boolean, anonymous?: boolean): Promise<GetQueryDto> {
    const query: CreateQueryDto = {
      from: anonymous ? undefined : from,
      to, body, undisclosed
    };
    return this.httpClient.post<GetQueryDto>('/api/query', query).toPromise();
  }
}
