import { Injectable } from '@angular/core';
import { My} from '../../shared/models/My';
import { Workout } from '../../shared/models/workout';
import { MyProgram } from '../../shared/models/MyProgram';
@Injectable({
  providedIn: 'root'
})
export class MyService {
  private my:My = new My();

  addToMy(workout:Workout):void{
    let myProgram = this.my.programs.find(program => program.workout.id === workout.id);
    if(myProgram){
      this.changeQuantity(workout.id, myProgram.quantity + 1);
      return;
    }
    this.my.programs.push(new MyProgram(workout));
  }
  removeFromMy(workoutId:number): void{
    this.my.programs = 
    this.my.programs.filter(program => program.workout.id!= workoutId);
  }
  changeQuantity(workoutId:number, quantity:number){
    let myProgram = this.my.programs.find(program => program.workout.id === workoutId);
    if(!myProgram) return;
    myProgram.quantity = quantity;
  }

  getMy():My{
    return this.my;
  }
}
