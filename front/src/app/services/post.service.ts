import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { AppSettings } from '../../shared/appsettings';

import { Post } from '../models/post';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {}

  findAll(): Observable<Post[]>{
      const headers = new HttpHeaders()
          .set('content-type', 'application/json')
          .set('accept', 'application/json');

      return this.http.get<Post[]>(AppSettings.apibaseurl + 'api/posts', { headers });
  }

  findById(postId: number): Observable<Post>{
        const headers = new HttpHeaders()
            .set('content-type', 'application/json')
            .set('accept', 'application/json');

        return this.http.get<Post>(AppSettings.apibaseurl + 'api/posts/' + postId, { headers });
    }

}
