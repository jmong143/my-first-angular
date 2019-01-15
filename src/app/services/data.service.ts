import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:Http) {
     // this.http = http;
     console.log('Data service connected...');
  }

  getPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts').pipe(map(data => data.json()));
  }
}
