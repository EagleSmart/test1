import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EtherealComponent } from './ethereal/ethereal.component';
import { ArticleComponent } from './article/article.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { StoryComponent } from './story/story.component';

const routes: Routes = [ 
  {path: 'gallery/:?', component: EtherealComponent},
  {path: 'main', component: StoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [EtherealComponent, ArticleComponent, AdminPanelComponent, StoryComponent];