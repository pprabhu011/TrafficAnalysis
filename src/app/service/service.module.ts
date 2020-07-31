import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedestrianCountComponent } from './pedestrian-count/pedestrian-count.component';
import { BusTerminalComponent } from './bus-terminal/bus-terminal.component';
import { ParkingSurveysComponent } from './parking-surveys/parking-surveys.component';
import { QueueLengthSurveysComponent } from './queue-length-surveys/queue-length-surveys.component';
import { AnprComponent } from './anpr/anpr.component';
import { IllegalmovementComponent } from './customized-counts/customized-counts.component';



@NgModule({
  declarations: [PedestrianCountComponent, BusTerminalComponent, ParkingSurveysComponent, QueueLengthSurveysComponent, AnprComponent, IllegalmovementComponent],
  imports: [
    CommonModule
  ]
})
export class ServiceModule { }
