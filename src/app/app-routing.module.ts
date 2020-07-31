import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceModule } from './service/service.module';
import {InteractionCountComponent} from './service/interaction-count/interaction-count.component';
import { HomeModule } from './home/home.module';
import { HomecontentComponent } from './home/homecontent.component';
import { AnprComponent } from './service/anpr/anpr.component';
import { BusTerminalComponent } from './service/bus-terminal/bus-terminal.component';
import { IllegalmovementComponent } from './service/customized-counts/customized-counts.component';
import { ParkingSurveysComponent } from './service/parking-surveys/parking-surveys.component';
import { PedestrianCountComponent } from './service/pedestrian-count/pedestrian-count.component';
import { QueueLengthSurveysComponent } from './service/queue-length-surveys/queue-length-surveys.component';
import { ContactinfoComponent } from './contactinfo/contactinfo.component';

const routes: Routes = [
  {path:'hometext', component: HomecontentComponent},
  {path:'contactus', component: ContactinfoComponent},
  {path:'anpr', component: AnprComponent},
  {path:'busterminal', component: BusTerminalComponent},
  {path:'illegalmovement', component: IllegalmovementComponent},
  {path:'interactioncount', component: InteractionCountComponent},
  {path:'parkingsurvey', component: ParkingSurveysComponent},
  {path:'pedestraincount', component: PedestrianCountComponent},
  {path:'queuelengthsurvey', component: QueueLengthSurveysComponent},
  {path:'',redirectTo:'hometext',pathMatch:'full'},
  {path:'**',component: HomecontentComponent},

];

@NgModule({
  imports: [ ServiceModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
