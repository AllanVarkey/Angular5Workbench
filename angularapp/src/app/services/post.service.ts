import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { Post } from '../models/Post';

@Injectable({
  providedIn: 'root'
})

export class PostService {

  postsUrl: string = 'https://jsonplaceholder.typicode.com/posts';
 
   httpOptions = {
   headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  constructor(private http: HttpClient) {

  }
  //get
  getPost(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl);

  }
  //post
  savePost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.postsUrl, post, this.httpOptions);

  }
  //put
  updatePost(post: Post): Observable<Post> {
    const url = `${this.postsUrl}/${post.id}`;
    return this.http.put<Post>(url, post, this.httpOptions);
  }
  //delete
  removePost(post: Post | number): Observable<Post> {
    const id = typeof post === 'number' ? post : post.id;
    const url = `${this.postsUrl}/${id}`;
    return this.http.delete<Post>(url, this.httpOptions);
  }
}
