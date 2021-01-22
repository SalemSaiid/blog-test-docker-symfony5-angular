import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Post } from "../models/post";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {}

  findAll(){
    return this.http.get<Post[]>("http://localhost:8001/blog/public/index.php/api_v1/posts");
  }

}
