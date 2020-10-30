import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
  NbSpinnerModule
} from '@nebular/theme';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QueriesComponent } from './pages/queries/queries.component';
import { QueriesService } from './services/queries/queries.service';

@NgModule({
  declarations: [
    AppComponent,
    QueriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'corporate' }),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbLayoutModule,
    NbEvaIconsModule,
    NbButtonModule,
    NbIconModule,
    NbCardModule,
    NbAccordionModule,
    NbSpinnerModule
  ],
  providers: [QueriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
