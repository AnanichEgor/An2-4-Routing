import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent, TaskComponent } from './components';
import { TasksRoutingModule } from './tasks-routing.module';
import { TasksServicesModule } from './tasks-services.module';

@NgModule({
  declarations: [TaskListComponent, TaskComponent],
  imports: [
    CommonModule,
    TasksRoutingModule,
    TasksServicesModule
  ]
})
export class TasksModule { }
