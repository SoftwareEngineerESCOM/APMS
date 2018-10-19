import {Component, OnInit} from '@angular/core';
import {UserService} from 'src/app/shared/services/user.service';
import {APP_NAME} from 'src/environments/environment';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user_id: string;
  app_name: string;
  profile_img: string;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.app_name = APP_NAME;
  }

  submit() {
    if (this.user_id === '') {
      alert('Enter a valid username');
      return;
    }

    this.userService.setUserData(this.user_id, this.profile_img);
    if (!this.authService.authenticate()) {
      alert('usuario invalido');
      return;
    }
    // this.router.navigate(['/chat']);
  }

}
