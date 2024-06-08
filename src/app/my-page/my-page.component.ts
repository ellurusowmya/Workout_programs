import { Component, OnInit } from '@angular/core';
import { MyService } from '../services/my/my.service';
import { My } from '../shared/models/My';
import { MyProgram } from '../shared/models/MyProgram';

@Component({
  selector: 'app-my-page',
  templateUrl: './my-page.component.html',
  styleUrls: ['./my-page.component.css']
})
export class MyPageComponent implements OnInit {
  my!: My; // Remove the "!" as it's better to initialize it in the constructor
  constructor(private myService: MyService) {
    this.my = this.myService.getMy(); // Initialize my in the constructor
  }

  ngOnInit(): void {
  }

  removeFromMy(myProgram: MyProgram) {
    this.myService.removeFromMy(myProgram.workout.id);
    this.setMy();
  }

  changeQuantity(myProgram: MyProgram, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this.myService.changeQuantity(myProgram.workout.id, quantity);
    this.setMy();
  }

  setMy() {
    this.my = this.myService.getMy();
  }
}
