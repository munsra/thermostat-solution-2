import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-thermostat',
  templateUrl: './thermostat.component.html',
  styleUrl: './thermostat.component.css'
})
export class ThermostatComponent implements OnInit{
  @Input() minValue = 0;
  @Input() maxValue = 30;
  @Input() targetValue = 150; // Default thermostat value
  @Input() interval = 5;

  ngOnInit(): void {
    // The thermostat value shouldn't be major than max value
    if(this.targetValue > this.maxValue){
      this.targetValue = this.maxValue;
    }
  }
}
