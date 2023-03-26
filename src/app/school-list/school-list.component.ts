import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { School } from '../school';
import { SchoolService } from '../school.service';

@Component({
  selector: 'app-school-list',
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.scss']
})
export class SchoolListComponent implements OnInit {

  schools: School[] = [];

  constructor(private schoolService: SchoolService,
    private router: Router) { }
  ngOnInit(): void {
    this.getSchool();
  }

  private getSchool(){
    this.schoolService.getSchoolList().subscribe(data => {
      this.schools =data;
    });
  }
  updateSchool(id: string){
    this.router.navigate(['update-school',id]);
  }

  deleteSchool(id: string){
    this.schoolService.deleteSchool(id).subscribe(data => {
      console.log(data);
      this.getSchool();
    })
  }

  viewSchool(id: string){
    this.router.navigate(['view-school',id]);
  }
}
