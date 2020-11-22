import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NbMenuItem, NbDialogService } from '@nebular/theme';
import { QueriesService } from 'src/app/services/queries/queries.service';
import { LoginComponent } from '../../login/login.component';

@Component({
  selector: 'app-ask-query-form',
  templateUrl: './ask-query-form.component.html',
  styleUrls: ['./ask-query-form.component.scss']
})
export class AskQueryFormComponent implements OnInit {

  showAllAskOptions = false;
  readonly undisclosedHint = 'Your username will NOT be shown publicly with the query, but will be known to the recipient privately. You will also be able to receive emails on replies as usual.';
  readonly anonymousHint = 'Your username will NOT be shown publicly with the query, and will NOT be known to the recipient either. However, you will NOT be able to receive emails on replies.';

  toOptions = [
    { name: 'President, Students\' Gymkhana', username: 'presidentsg'},
    { name: 'General Secretary, Games and Sports', username: 'sportsecy'},
    { name: 'General Secretary ,Media and Cultural', username: 'mncsecy'},
    { name: 'General Secretary, Science and Technology', username: 'sntsecy'},
    { name: 'Chairperson, Students\' Senate', username: 'chair_ss'}
  ];

  from: string;
  to: string;
  body: string;

  submitting = false;
  @Output() submitted = new EventEmitter<void>();

  constructor(private queriesService: QueriesService,
              private dialogService: NbDialogService) { }

  ngOnInit(): void {
  }

  async askQuery(as?: 'undisclosed' | 'anonymous'): Promise<void> {
    this.showAllAskOptions = false;

    const jwtToken: string =
      as === 'anonymous' ? undefined :
      await this.dialogService.open(LoginComponent).onClose.toPromise();

    if (!jwtToken && as !== 'anonymous') { return; }

    this.submitting = true;
    await this.queriesService.askQuery(this.to, this.body, jwtToken, as === 'undisclosed');
    this.from = '';
    this.to = '';
    this.body = '';
    this.submitting = false;
    this.submitted.emit();
  }

}
