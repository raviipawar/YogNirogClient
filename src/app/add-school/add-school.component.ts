import { Component, OnInit } from '@angular/core';
import { School } from '../school';
import { FormsModule } from '@angular/forms';
import { SchoolService } from '../school.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-school',
  templateUrl: './add-school.component.html',
  styleUrls: ['./add-school.component.scss']
})
export class AddSchoolComponent implements OnInit {
school: School = new School();

onSubmit() {
  
  console.log('School registration submitted');
  console.log(this.school);
  this.addSchool();
}

constructor(private schoolService : SchoolService,
  private router: Router) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  addSchool(){
    this.schoolService.addSchool(this.school).subscribe( data =>{
      console.log(data);
      this.goToSchoolList();
    },
  error => console.log(error));
  }

  goToSchoolList(){
    this.router.navigate(['/schools']);
  }

  
}
