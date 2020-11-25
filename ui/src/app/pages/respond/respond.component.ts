import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QueriesService } from 'src/app/services/queries/queries.service';
import { GetQueryDto } from 'dto/query.dto';

@Component({
  selector: 'app-respond',
  templateUrl: './respond.component.html',
  styleUrls: ['./respond.component.scss']
})
export class RespondComponent implements OnInit {

  query?: GetQueryDto;

  newReply = '';

  constructor(private activatedRoute: ActivatedRoute,
              private queriesService: QueriesService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.queriesService.getQuery(params.get('id'))
        .then(query => this.query = query);
    });
  }

  sendReply(): void {
    console.log(this.newReply);
  }

}
