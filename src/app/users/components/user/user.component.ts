import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

import { UserModel } from './../../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent {
  @Output() editUser = new EventEmitter<UserModel>();
  @Input() user: UserModel;

  onEditUser() {
    this.editUser.emit(this.user);
  }
}

