import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QueryDto } from 'dto/query.dto';

@Injectable({
  providedIn: 'root'
})
export class QueriesService {

  constructor(private httpClient: HttpClient) { }

  getQueries(): Promise<QueryDto[]> {
    return this.httpClient.get<QueryDto[]>('/api/query').toPromise();
  }
}
