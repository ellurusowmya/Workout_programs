export class Workout{
    id!:number;
    name!:string;
    days!:number;
    tags?:string[];
    favorite:boolean=false;
    stars:number = 0;
    imageUrl!:string;
    origins!:string[];
    workoutTime!:string;
}