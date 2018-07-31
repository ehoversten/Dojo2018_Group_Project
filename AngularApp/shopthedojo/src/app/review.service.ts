import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class ReviewService {
  constructor(private http: HttpClient) {}

create(review,cb){
    this.http.post("/api/reviews/create",review)
    .subscribe(data=>cb(data));
}
all(cb){
    this.http.get("/api/reviews/all")
    .subscribe(data=>cb(data));
}
findById(review,cb){
    this.http.get("/api/reviews/findone"+review._id)
    .subscribe(data=>cb(data));
}
update(review,cb){
    this.http.put("/api/reviews/update"+review._id,review)
    .subscribe(data=>cb(data));
}
destroy(review,cb){
    this.http.delete("/api/reviews/destroy"+review._id)
    .subscribe(data=>cb(data));
}

}