import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ArticlesComponent} from './articles/articles.component';
import {BlogsComponent} from './blogs/blogs.component';
import {ReportsComponent} from './reports/reports.component';

const routes: Routes = [
  { path: '', redirectTo: '/articles', pathMatch: 'full' },
  { path: 'articles', component: ArticlesComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'reports', component: ReportsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
