import { Component } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  selectedUser = DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)];

  get imagePath() {
    return '/users/' + this.selectedUser.avatar;
  }

  onSelectUser() {
    const filteredDummyUsers = DUMMY_USERS.filter(
      (u) => u.id != this.selectedUser.id
    );

    this.selectedUser =
      filteredDummyUsers[Math.floor(Math.random() * filteredDummyUsers.length)];
  }
}
