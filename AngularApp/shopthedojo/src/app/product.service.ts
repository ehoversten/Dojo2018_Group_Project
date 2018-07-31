import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}
  create(product,cb){
    this.http.post("/api/product/create",product)
    .subscribe(data=>cb(data));
}
all(cb){
    this.http.get("/api/products/all")
    .subscribe(data=>cb(data));
}
findById(product,cb){
    this.http.get("/api/products/findone"+product._id)
    .subscribe(data=>cb(data));
}
update(product,cb){
    this.http.put("/api/products/update"+product._id,product)
    .subscribe(data=>cb(data));
}
destroy(product,cb){
    this.http.delete("/api/products/destroy"+product._id)
    .subscribe(data=>cb(data));
}
}