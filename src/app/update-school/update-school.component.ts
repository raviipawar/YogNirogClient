import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { School } from '../school';
import { SchoolService } from '../school.service';

@Component({
  selector: 'app-update-school',
  templateUrl: './update-school.component.html',
  styleUrls: ['./update-school.component.scss']
})
export class UpdateSchoolComponent  implements OnInit {
  
  id!: string;
  school: School = new School();

  constructor(private schoolService: SchoolService,
    private route: ActivatedRoute,
    private router : Router) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.schoolService.getSchoolById(this.id).subscribe(data =>{
      this.school=data;
    }, error => console.error(error));
  }
 
  
  onSubmit() {
    
    console.log('School Detail Updated');
    console.log(this.school);
    console.log(this.id);
    this.schoolService.updateSchool(this.id, this.school).subscribe(data =>{
      this.router.navigate(['/schools']);
    });
  }
}
