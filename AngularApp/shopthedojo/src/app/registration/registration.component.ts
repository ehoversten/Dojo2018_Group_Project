import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  private registrant;
  logger: { email: string; password: string };
  errors: any[];

<<<<<<< HEAD
  constructor(private userService: UserService, private router: Router) {
=======
  constructor(private us: UserService, private router: Router) {
>>>>>>> 1ee69159adc2dc902c1efa4d051238a4b5c8eaed
    this.init();
  }

  // when start the component we set up the object for registrant.
  init() {
    this.registrant = {
      fName: '',
      lName: '',
      email: '',
      password: '',
      confirm: ''
    };

    this.errors = [];
  }

  register() {
<<<<<<< HEAD
    this.userService.register(this.registrant, data => {
=======
    this.us.register(this.registrant, data => {
>>>>>>> 1ee69159adc2dc902c1efa4d051238a4b5c8eaed
      if (data.errors || data.message) {
        this.errors.push(data.message);
      } else {
        localStorage.setItem('uid', data._id);
        this.router.navigateByUrl('/browse');
      }
    });
  }

  // This is when this route is hit.
  // When initializing the component we are resetting the user. "Logging them out"
  ngOnInit() {
<<<<<<< HEAD
    this.userService.logout(data => {});
=======
    this.us.logout(data => {});
>>>>>>> 1ee69159adc2dc902c1efa4d051238a4b5c8eaed
    localStorage.setItem('uid', undefined);
  }
}
