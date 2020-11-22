import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private nbDialogRef: NbDialogRef<LoginComponent>,
              private authService: AuthService) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.nbDialogRef.close();
  }

  async submit(username: string, password: string): Promise<void> {
    const {access_token} = await this.authService.login(username, password);
    this.nbDialogRef.close(access_token);
  }

}
