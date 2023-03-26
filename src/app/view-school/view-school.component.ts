import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { School } from '../school';
import { SchoolService } from '../school.service';

@Component({
  selector: 'app-view-school',
  templateUrl: './view-school.component.html',
  styleUrls: ['./view-school.component.scss']
})
export class ViewSchoolComponent implements OnInit{
  
  
  id!: string;
  school!: School;
  constructor(private route: ActivatedRoute, 
    private schoolService: SchoolService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.school = new School();
    this.schoolService.getSchoolById(this.id).subscribe((data: School) => {
      this.school = data;
    });
  }
}
