import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionListComponent } from './components/question-list/question-list.component';
import { SectionComponent } from './components/section/section.component';

const routes: Routes = [

 {path:'question-list',component:QuestionListComponent},
 {path:'',component:SectionComponent},
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
