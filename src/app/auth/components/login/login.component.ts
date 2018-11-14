import {Component, OnInit} from '@angular/core';
import {UserService} from 'src/app/shared/services/user.service';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {labels, placeholders} from './login.strings';
import {MatSnackBar} from '@angular/material';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserCredentials} from '../../classes/user-credentials';
import {RestService} from '../../../shared/services/rest.service';
import {User} from '../../../user/classes/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  labels = labels;
  placeholders = placeholders;
  userCredentialsForm: FormGroup;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private rest: RestService
  ) {
    this.userCredentialsForm = this.formBuilder.group(new UserCredentials());
  }

  ngOnInit() {
    this.authService.logout();
  }

  submit() {

    this.rest.request('post', 'User/UserByIdAndPassword',
      this.userCredentialsForm.value)
      .subscribe(response => {
        console.log(response);
        if (response.code === 200) {
          this.authService.authenticate();
          this.userService.initUser(response.payload as User);
          this.router.navigate(['/']);
        } else {
          this.showSnackBar(response.message, this.labels.snackBarAction, 2500);
          if (!this.authService.authenticate()) {
            return;
          }
        }
      });
  }

  showSnackBar(message: string, action: string, duration: number) {
    this.snackBar.open(message, action, {
      duration: duration
    });
  }
}
