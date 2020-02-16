import { AboutComponent, PathNotFoundComponent } from './components';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AboutComponent, PathNotFoundComponent],
  imports: [
    CommonModule,
  ]
})
export class LayoutModule { }
