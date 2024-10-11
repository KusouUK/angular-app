import { Component, computed, signal } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  selectedUser = signal(
    DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)]
  );

  imagePath = computed(() => '/users/' + this.selectedUser().avatar);

  onSelectUser() {
    const filteredDummyUsers = DUMMY_USERS.filter(
      (u) => u.id != this.selectedUser().id
    );

    this.selectedUser.set(
      filteredDummyUsers[Math.floor(Math.random() * filteredDummyUsers.length)]
    );
  }
}
