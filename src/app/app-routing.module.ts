import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSchoolComponent } from './add-school/add-school.component';
import { HomeComponent } from './home/home.component';

import { SchoolListComponent } from './school-list/school-list.component';
import { UpdateSchoolComponent } from './update-school/update-school.component';
import { ViewSchoolComponent } from './view-school/view-school.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'schools', component: SchoolListComponent},
  { path: 'create-school', component: AddSchoolComponent},
  { path: 'update-school/:id', component: UpdateSchoolComponent},
  { path: 'view-school/:id', component: ViewSchoolComponent},
  { path: '', redirectTo: 'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
