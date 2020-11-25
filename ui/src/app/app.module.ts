import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {
  NbThemeModule,
  NbLayoutModule,
  NbSidebarModule,
  NbButtonModule,
  NbIconModule,
  NbMenuModule,
  NbCardModule,
  NbAccordionModule,
  NbSpinnerModule,
  NbInputModule,
  NbSelectModule,
  NbFormFieldModule,
  NbContextMenuModule,
  NbTooltipModule,
  NbDialogModule
} from '@nebular/theme';
import {AutosizeModule} from 'ngx-autosize';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QueriesComponent } from './pages/queries/queries.component';
import { QueriesService } from './services/queries/queries.service';
import { AskQueryFormComponent } from './pages/queries/ask-query-form/ask-query-form.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthService } from './services/auth/auth.service';
import { RespondComponent } from './pages/respond/respond.component';

@NgModule({
  declarations: [
    AppComponent,
    QueriesComponent,
    AskQueryFormComponent,
    LoginComponent,
    RespondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    NbThemeModule.forRoot({ name: 'corporate' }),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDialogModule.forRoot({}),
    NbLayoutModule,
    NbEvaIconsModule,
    NbButtonModule,
    NbIconModule,
    NbCardModule,
    NbAccordionModule,
    NbSpinnerModule,
    NbInputModule,
    NbFormFieldModule,
    NbSelectModule,
    NbContextMenuModule,
    NbTooltipModule,
    AutosizeModule
  ],
  providers: [
    AuthService,
    QueriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
