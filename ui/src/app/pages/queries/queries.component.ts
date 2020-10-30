import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-queries',
  templateUrl: './queries.component.html',
  styleUrls: ['./queries.component.scss']
})
export class QueriesComponent implements OnInit {

  queries = [];

  constructor() { }

  ngOnInit(): void {
  }

}
