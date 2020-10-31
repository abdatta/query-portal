import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-ask-query-form',
  templateUrl: './ask-query-form.component.html',
  styleUrls: ['./ask-query-form.component.scss']
})
export class AskQueryFormComponent implements OnInit {

  showAllAskOptions = false;
  readonly undisclosedHint = 'Your username will NOT be shown publicly with the query, but will be known to the recipient privately. You will also be able to receive emails on replies as usual.';
  readonly anonymousHint = 'Your username will NOT be shown publicly with the query, and will NOT be known to the recipient either. However, you will NOT be able to receive emails on replies.';

  constructor() { }

  ngOnInit(): void {
  }

  askQuery(as?: 'undisclosed' | 'anonymous'): void {
    this.showAllAskOptions = false;
    console.log('Query asked as: ' + as);
  }

}
