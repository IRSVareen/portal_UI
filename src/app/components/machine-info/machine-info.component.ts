import { Component , Input } from '@angular/core';

@Component({
  selector: 'app-machine-info',
  templateUrl: './machine-info.component.html',
  styleUrls: ['./machine-info.component.css']
})
export class MachineInfoComponent {
    @Input() lableValue:any;
    @Input() lable:string = '';
    @Input() lableClass:string = '';
}
