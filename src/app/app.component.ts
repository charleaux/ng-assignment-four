import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gameCounter = 0;

  onGameCounterIncreased(gameCounterData: { increase: number }) {
    this.gameCounter += gameCounterData.increase;
    console.log(this.gameCounter);
  }

  gameCounterIsEven() {
    return this.gameCounter % 2 === 0;
  }
}
