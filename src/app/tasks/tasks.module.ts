import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent, TaskComponent, TaskFormComponent } from './components';
import { TasksRoutingModule } from './tasks-routing.module';
import { TasksServicesModule } from './tasks-services.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TaskListComponent, TaskComponent, TaskFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    TasksRoutingModule,
    TasksServicesModule
  ]
})
export class TasksModule { }
