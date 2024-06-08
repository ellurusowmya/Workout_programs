import { Injectable } from '@angular/core';
import { Workout } from '../../shared/models/workout';
import { Tag } from '../../shared/models/Tag';// Fix the import for 'Tag' (change 'Tag' to 'tag')

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  constructor() { }

  getWorkoutById(id: number): Workout { // Use 'undefined' instead of '!' to handle cases where the workout is not found
    return this.getAll().find(workout => workout.id == id)!;
  }
  
  getAllWorkoutsBySearchTerm(searchTerm: string): Workout[] {
    return this.getAll().filter(workout =>
      workout.name.toLowerCase().includes(searchTerm.toLowerCase())); // Change 'params' to 'searchTerm'
  }

  getAllTags(): Tag[] {
    return [
      { name: 'All', count: 40 },
      { name: 'Yoga', count: 1 },
      { name: 'Full Body', count: 12 },
      { name: 'Abs & Core', count: 8 },
      { name: 'Booty', count: 3 },
      { name: 'Arms', count: 1 },
      { name: 'Resistance', count: 2 },
      { name: 'Weight Loss', count: 12 },
      { name: 'Legs', count: 1 },
    ];
  }

  getAllworkoutsByTag(tag: string): Workout[] {
    return tag === "All" ?
      this.getAll() :
      this.getAll().filter(workout => workout.tags?.includes(tag));
  }

  getAll():Workout[]{
    return[
      {
        id: 1,
        name: '2023 Hourglass Challenge',
        workoutTime: '20-50',
        days: 10,
        favorite: true,
        origins: ['Dumbbells(Optional)','Resistance Bands(Optional)','Fitness Mat'],
        stars: 4.5,
        imageUrl: 'assets/images/workouts/workout2.jpg',
        tags: ['Full Body', 'Abs & Core', 'Booty', 'Arms', 'Resistance'],
      },
      {
        id: 2,
        name: '2023 Summer Shred Challenge',
        workoutTime: '30-50',
        days: 28,
        favorite: false,
        origins: ['Fitness Mat'],
        stars: 4.0,
        imageUrl: 'assets/images/workouts/workout11.jpg',
        tags: ['Full Body','Weight Loss'],
      },
      {
        id: 3,
        name: '2023 1 Min Challenge',
        workoutTime: '30-40',
        days: 21,
        favorite: true,
        origins: ['Fitness Mat'],
        stars: 3.0,
        imageUrl: 'assets/images/workouts/workout7.jpg',
        tags: ['Full Body','Weight Loss','Abs & Core'],
      },
      {
        id: 4,
        name: '2023 Weight Loss Challenge',
        workoutTime: '20-50',
        days: 28,
        favorite: false,
        origins: ['Fitness Mat','Dumbbells(Optional)','Resistance Bands(Optional)'],
        stars: 4.0,
        imageUrl: 'assets/images/workouts/workout4.jpg',
        tags: ['Weight Loss','Full Body', 'Booty'],
      },
      {
        id: 5,
        name: '2022 Get Fit And Moving Challenge',
        workoutTime: '20-50',
        days: 56,
        favorite: true,
        origins: ['Fitness Mat','Dumbbells(Optional)','Resistance Bands'],
        stars: 5.0,
        imageUrl: 'assets/images/workouts/workout3.jpg',
        tags: ['Weight Loss','Full Body'],
      },
      {
        id: 6,
        name: '2022 FlatStomach Challenge',
        workoutTime: '20-45',
        days: 28,
        favorite: true,
        origins: ['Fitness Mat','Resistance Bands'],
        stars: 5.0,
        imageUrl:'assets/images/workouts/workout9.jpg',
        tags: ['Full Body', 'Weight Loss','Abs & Core'],
      },
      {
        id: 7,
        name: '2022 Get Peachy Challenge',
        workoutTime: '30-40',
        days: 28,
        favorite: false,
        origins: ['Fitness Mat','Dumbbells(Optional)', 'Resistance Bands(Optional)'],
        stars: 4.0,
        imageUrl: 'assets/images/workouts/workout8.jpg',
        tags:['Full Body', 'Weight Loss','Abs & Core']
      },
      {
        id: 8,
        name: '2021 Intense Core Challenge',
        workoutTime: '20-50',
        days: 15,
        favorite: true,
        origins: ['Fitness Mat'],
        stars: 5.0,
        imageUrl: 'assets/images/workouts/workout6.jpg',
        tags: ['Full Body','Abs & Core'],
      },
      {
        id: 9,
        name: '2020 Get Abs Challenge',
        workoutTime: '20-40',
        days: 18,
        favorite: false,
        origins: ['Fitness Mat','Dumbbells(Optional)', 'Resistance Bands(Optional)'],
        stars: 5.0,
        imageUrl: 'assets/images/workouts/workout12.jpg',
        tags: ['Full Body','Abs & Core', 'Weight Loss'],
      },
      {
        id: 10,
        name: '2020 Flat Belly Challenge',
        workoutTime: '10-60',
        days: 30,
        favorite: true,
        origins: ['Fitness Mat'],
        stars: 3.0,
        imageUrl: 'assets/images/workouts/workout1.jpg',
        tags: ['Abs & Core', 'Weight Loss'],
      },
      {
        id: 11,
        name: 'Sun Salutation',
        workoutTime: '10-20',
        days: 30,
        favorite: true,
        origins: ['Fitness Mat'],
        stars: 5.0,
        imageUrl: 'assets/images/workouts/workout5.jpg',
        tags: ['Yoga','Weight Loss'],
      },
      {
        id: 12,
        name: '2021 Lean Thigh Challenge',
        workoutTime: '15-60',
        days: 30,
        favorite: false,
        origins: ['Fitness Mat'],
        stars: 5.0,
        imageUrl: 'assets/images/workouts/workout13.jpg',
        tags: ['Legs','Weight Loss'],
      },
      {
        id: 13,
        name: '2021 FITober',
        workoutTime: '10-30',
        days: 22,
        favorite: false,
        origins: ['Fitness Mat'],
        stars: 3.0,
        imageUrl: 'assets/images/workouts/workout14.jpg',
        tags: ['Full Body','Weight Loss'],
      },
      {
        id: 14,
        name: '2021 MOVEmber',
        workoutTime: '10-30',
        days: 45,
        favorite: false,
        origins: ['Fitness Mat','Dumbbells(Optional)','Resistance Bands'],
        stars: 3.0,
        imageUrl: 'assets/images/workouts/workout16.jpg',
        tags: ['Full Body','Weight Loss', 'Resistance'],
      },
      {
        id: 15,
        name: '25 Days Hourglass Challenge',
        workoutTime: '10-50',
        days: 25,
        favorite: true,
        origins: ['Fitness Mat', 'Resistance Bands'],
        stars: 4.0,
        imageUrl: 'assets/images/workouts/workout15.jpg',
        tags: ['Full Body','Booty', 'Abs & Core'],
      },


    ];
  }
}
