import { Component, Input, OnChanges } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-bottom-cards',
  templateUrl: './bottom-cards.component.html',
  styleUrls: ['./bottom-cards.component.css']
})
export class BottomCardsComponent implements OnChanges{
  @Input() conveyorSpeed!: number;
  @Input() cpuTemperature!: number;
  @Input() gpuTemperature!: number;
  @Input() isStop!: boolean;
  @Input() ejectedCount!: number;
  @Input() rejectedCount!: number;
  @Input() motorAmpere!: number;
  @Input() visionTemperature!: number
  @Input() panelTemperature!: number
  @Input() leftCameraTemperature!: number
  @Input() rightCameraTemperature!: number

  isErrorconveyor = false;
  isErrorcpu = false;
  isErrorgpu = false;
  isErrormotor = false;
  isErrorvision = false;
  isErrorpanel = false;
  isErrorleftcam = false;
  isErrorrightcam = false;

  ngOnChanges(){
    this.showError()
  }

  showError() {
    this.isErrorconveyor = this.conveyorSpeed > 7.12
        this.isErrorcpu = this.cpuTemperature > 70;
        this.isErrorgpu = this.gpuTemperature > 70;
        this.isErrorvision = this.visionTemperature > 80;
        this.isErrormotor = this.motorAmpere > 9;
        this.isErrorpanel = this.panelTemperature > 75;
        this.isErrorleftcam = this.leftCameraTemperature > 65;
        this.isErrorrightcam = this.rightCameraTemperature > 65;
    }
}
