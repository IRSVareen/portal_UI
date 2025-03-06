import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bottom-cards',
  templateUrl: './bottom-cards.component.html',
  styleUrls: ['./bottom-cards.component.css']
})
export class BottomCardsComponent {
  @Input() conveyorSpeed!: number;
  @Input() cpuTemperature!: number;
  @Input() gpuTemperature!: number;
  @Input() isStop!: boolean;
}
