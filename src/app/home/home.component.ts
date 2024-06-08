import { Component, OnInit } from '@angular/core';
import { Workout } from '../shared/models/workout';
import { WorkoutService } from '../services/workout/workout.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  workouts: Workout[] = [];

  constructor(private workoutService: WorkoutService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['searchTerm']) {
        this.workouts = this.workoutService.getAllWorkoutsBySearchTerm(params['searchTerm']);
      } else if (params['tag']) {
        this.workouts = this.workoutService.getAllworkoutsByTag(params['tag']);
      } else {
        this.workouts = this.workoutService.getAll();
      }
    });
  }

  toggleFavorite(workout: Workout): void {
    workout.favorite = !workout.favorite;
  }
}
