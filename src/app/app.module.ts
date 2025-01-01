import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {MatTabGroup, MatTabLink, MatTabNav, MatTabNavPanel} from '@angular/material/tabs';
import {RouterOutlet} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {ArticlesComponent} from './articles/articles.component';
import {AppRoutingModule} from './app.routes';
import {BlogsComponent} from './blogs/blogs.component';
import {ReportsComponent} from './reports/reports.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule, provideAnimations} from '@angular/platform-browser/animations';
import {NgxSpinnerModule} from 'ngx-spinner';


@NgModule({
  exports: [AppComponent],
  declarations: [
    AppComponent,
  ],
  providers: [provideAnimations()],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MatTabGroup,
    MatTabNav,
    MatTabLink,
    MatTabNavPanel,
    RouterOutlet,
    ArticlesComponent,
    BlogsComponent,
    ReportsComponent,
    HttpClientModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
    BrowserAnimationsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {
}
