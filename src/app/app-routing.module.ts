import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { ContainerComponent } from './container/container.component';


const routes: Routes = [{path: 'hello', component: SearchComponent},
{path: 'hello2', component: ContainerComponent}];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
