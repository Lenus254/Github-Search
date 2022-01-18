import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  users!: User;
  githubusername:string="lenus254";
  repoName!: string;
    frepos:any;

  username!: string;

  constructor(private http:HttpClient) { 
    this.users = new User('', '', '', 0, '', new Date(), 0, 0);
  }
}
