import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-users-list',
  imports: [],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css',
})
export class UsersListComponent {
  constructor(
    private authService: AuthService,
    private apiService: ApiService
  ) {}
  logoutFunc() {
    this.authService.logout();
  }
  user: any = '';
  userList: any = '';
  ngOnInit() {
    this.apiService.getUser().subscribe((data) => {
      this.user = data;
    });
    this.apiService.getUsers().subscribe((data) => {
      this.userList = data;
    });
  }
}
