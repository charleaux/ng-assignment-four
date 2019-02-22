import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() gameCounterIncreased = new EventEmitter<{ increase: number }>();
  ref;

  constructor() {}

  ngOnInit() {}

  onStart() {
    this.ref = setInterval(() => {
      this.gameCounterIncreased.emit({ increase: 1 });
    }, 1000);
  }

  onStop() {
    clearInterval(this.ref);
  }
}
