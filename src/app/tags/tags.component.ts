import { Component, Input, OnInit } from '@angular/core';
import { WorkoutService } from '../services/workout/workout.service';
import { Tag } from '../shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit{

  @Input()
  workoutPageTags?:string[];

  @Input()
  justifyContent:string = 'center';

  tags?:Tag[];
  constructor(private workoutService:WorkoutService){ }

  ngOnInit(): void {
    if(!this.workoutPageTags)
    this.tags = this.workoutService.getAllTags();
  }
}
