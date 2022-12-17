import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeMemeComponent } from './liste-meme/liste-meme.component';
import { StatsComponent } from './stats/stats.component';
import { TotalParTagComponent } from './total-par-tag/total-par-tag.component';
import { MoyenneClickThemeComponent } from './moyenne-click-theme/moyenne-click-theme.component';

const routes: Routes = [
  {path: 'list', component: ListeMemeComponent},
  {path: 'stats', component: StatsComponent},
  {path: 'stats/totalParTag', component: TotalParTagComponent},
  {path: 'stats/moyenne', component: MoyenneClickThemeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
