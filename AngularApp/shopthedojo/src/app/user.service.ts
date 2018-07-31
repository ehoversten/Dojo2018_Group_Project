import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
<<<<<<< HEAD

  // 7.30.2018 - per Jose. Need update, findAll, delete routes.
=======
>>>>>>> 1ee69159adc2dc902c1efa4d051238a4b5c8eaed
}
