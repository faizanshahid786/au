import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IPost } from '../interfaces/IPosts';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostService {
  constructor(private httpClient: HttpClient) {}

  // For getting all the posts in the table
  getAllPosts(): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(`${environment.baseURL}/posts`);
  }

  // get related post by id
  getPost(id: number): Observable<IPost> {
    return this.httpClient.get<IPost>(`${environment.baseURL}/posts/${id}`);
  }

  // Id will be zero
  addPost(data: IPost): Observable<IPost> {
    // will recieve data with id not equal to zero
    return this.httpClient.post<IPost>(`${environment.baseURL}/posts`, data);
  }

  // data  Id will not be zero
  editPost(data: IPost): Observable<IPost> {
    return this.httpClient.put<IPost>(
      `${environment.baseURL}/posts/${data.id}`,
      data
    );
  }

  // data  Id will not be zero
  deletePost(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${environment.baseURL}/posts/${id}`);
  }
}
