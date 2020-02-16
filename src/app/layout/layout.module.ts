import { AboutComponent, HomeComponent, PathNotFoundComponent } from './components';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HomeComponent, AboutComponent, PathNotFoundComponent],
  imports: [
    CommonModule,
  ]
})
export class LayoutModule { }
