import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
  NbTooltipModule
} from '@nebular/theme';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QueriesComponent } from './pages/queries/queries.component';
import { QueriesService } from './services/queries/queries.service';
import { AskQueryFormComponent } from './pages/queries/ask-query-form/ask-query-form.component';

@NgModule({
  declarations: [
    AppComponent,
    QueriesComponent,
    AskQueryFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    NbThemeModule.forRoot({ name: 'corporate' }),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
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
    NbTooltipModule
  ],
  providers: [QueriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
