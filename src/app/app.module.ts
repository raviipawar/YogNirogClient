import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SchoolListComponent } from './school-list/school-list.component';
import { AddSchoolComponent } from './add-school/add-school.component';
import { FormsModule } from '@angular/forms';
import { UpdateSchoolComponent } from './update-school/update-school.component';
import { ViewSchoolComponent } from './view-school/view-school.component';
import { HomeComponent } from './home/home.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';



@NgModule({
  declarations: [
    AppComponent,
    SchoolListComponent,
    AddSchoolComponent,
    UpdateSchoolComponent,
    ViewSchoolComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    CarouselModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
