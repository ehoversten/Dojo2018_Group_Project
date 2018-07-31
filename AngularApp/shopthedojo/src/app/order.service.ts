import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class OrderService {
  constructor(private http: HttpClient) {}

create(order,cb){
    this.http.post("/api/orders/create",order)
    .subscribe(data=>cb(data));
}
all(cb){
    this.http.get("/api/orders/all")
    .subscribe(data=>cb(data));
}
findById(order,cb){
    this.http.get("/api/orders/findone"+order._id)
    .subscribe(data=>cb(data));
}
update(order,cb){
    this.http.put("/api/orders/update"+order._id,order)
    .subscribe(data=>cb(data));
}
destroy(order,cb){
    this.http.delete("/api/orders/destroy"+order._id)
    .subscribe(data=>cb(data));
}

}