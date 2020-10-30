import { Component, OnInit } from '@angular/core';
import { QueriesService } from 'src/app/services/queries/queries.service';
import { QueryDto } from 'dto/query.dto';

@Component({
  selector: 'app-queries',
  templateUrl: './queries.component.html',
  styleUrls: ['./queries.component.scss']
})
export class QueriesComponent implements OnInit {

  loading = true;
  queries: QueryDto[] = [];

  constructor(private queriesService: QueriesService) { }

  async ngOnInit(): Promise<void> {
    this.queries = await this.queriesService.getQueries();
    this.loading = false;
  }

}
