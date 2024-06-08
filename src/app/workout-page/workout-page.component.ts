import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { WorkoutService } from '../services/workout/workout.service';
import { Workout } from '../shared/models/workout';
import { MyService } from '../services/my/my.service';

@Component({
  selector: 'app-workout-page',
  templateUrl: './workout-page.component.html',
  styleUrls: ['./workout-page.component.css']
})
export class WorkoutPageComponent implements OnInit {
  workout!: Workout;

  constructor(
    private activatedRoute: ActivatedRoute,
    private workoutService: WorkoutService,
    private myService: MyService,
    private router: Router
  ) {
    activatedRoute.params.subscribe((params: Params) => {
      if (params['id']) { // Access 'id' using bracket notation
        this.workout = workoutService.getWorkoutById(params['id'])!;
      }
    });
  }

  ngOnInit(): void {}

  addToMy() {
    this.myService.addToMy(this.workout);
    this.router.navigateByUrl('/my-page');
  }
}
