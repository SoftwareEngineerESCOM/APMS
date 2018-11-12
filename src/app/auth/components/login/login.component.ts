import {Component, OnInit} from '@angular/core';
import {UserService} from 'src/app/shared/services/user.service';
import {APP_NAME} from 'src/environments/environment';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {labels, placeholders} from './login.strings';
import {MatSnackBar} from '@angular/material';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserCredentials} from '../../classes/user-credentials';

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
    private formBuilder: FormBuilder
  ) {
    this.userCredentialsForm = this.formBuilder.group(new UserCredentials());
  }

  ngOnInit() {
  }

  submit() {
    console.log(this.userCredentialsForm.value as UserCredentials);
    this.showSnackBar(this.labels.snackBarMessage, this.labels.snackBarAction, 2500);
    if (!this.authService.authenticate()) {
      return;
    }
    // this.router.navigate(['/chat']);
  }

  showSnackBar(message: string, action: string, duration: number) {
    this.snackBar.open(message, action, {
      duration: duration
    });
  }
}
