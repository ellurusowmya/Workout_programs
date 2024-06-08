import { Workout } from "./workout";

export class MyProgram{
    constructor(workout:Workout){
        this.workout = workout;
    }
    workout:Workout;
    quantity:number = 1;

    get days():number{
        return this.workout.days * this.quantity;
    }
}