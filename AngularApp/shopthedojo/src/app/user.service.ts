import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  session(cb) {
    this.http.get('/api/users/session').subscribe(id => cb(id));
  }

  register(user, cb) {
    this.http.post('/api/users/register', user).subscribe(data => cb(data));
  }

  login(user, cb) {
    this.http.post('/api/users/login', user).subscribe(data => cb(data));
  }

  logout(cb) {
    this.http.get('/api/users/logout').subscribe(data => cb(data));
  }

  findById(id, cb) {
    this.http.get('/api/users/' + id).subscribe(data => cb(data));
  }

  // 7.30.2018 - per Jose. Need update, findAll, delete routes.
  //find all
  all(cb){
		this.http.get("/api/users/all")
		.subscribe(data=>cb(data));
	}
  //delete user
  destroy(user,cb){
		this.http.delete("/api/user/delete"+user._id)
		.subscribe(data=>cb(data));
  }
  //update user
  update(user,cb){
		this.http.put("/api/listings/update"+user._id,user)
		.subscribe(data=>cb(data));
	}
}
