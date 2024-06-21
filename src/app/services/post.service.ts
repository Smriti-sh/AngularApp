import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/Post';



// @Injectable({providedIn: 'root'})
@Injectable()
export class PostService {
postsUrl:string= 'https://jsonplaceholder.typicode.com/posts';

  //import or inject HttpClient as a dependency
  constructor(private http:HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl);
  }

  savePost(post:Post): Observable<Post>{

    const httpOptions = {
      headers: new HttpHeaders({'Content-Type':'application/json'})
    }

    return this.http.post<Post>(this.postsUrl,post,httpOptions);
  }
}
