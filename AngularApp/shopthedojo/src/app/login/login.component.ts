import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { UserService } from './../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private logUser;
  private errors;

  constructor(private userService: UserService, private router: Router) {
    this.init();
  }

  init() {
    this.logUser = {
      email: '',
      password: ''
    };

    this.errors = [];
  }
  login(){
		this.userService.login(this.logUser,(data)=>{
			if(data.errors || data.message){
				this.errors.push(data.message);
			}else{
				localStorage.setItem("uid",data._id);
				this.router.navigateByUrl("/browse");
			}
		});
	}

  ngOnInit() {
    this.userService.logout(data => {});
    localStorage.setItem('uid', undefined);
  }
}
