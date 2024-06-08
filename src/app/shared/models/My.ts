import { MyProgram } from "./MyProgram";
export class My{
    programs:MyProgram[] = [];

    get totalDays(): number{
        let totalDays = 0;
        this.programs.forEach(program => {
            totalDays += program.days;
        });

        return totalDays;
    }
}