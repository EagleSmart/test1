import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
// import  '@rxjs/rx';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {

   }


   getPhotos(){
    return this.http.get('http://localhost:3000/api/photo');
   //.pipe(map((response: any) => response.json));
  }


   getArticles(){
     return this.http.get('http://localhost:3000/api/articles');
    //.pipe(map((response: any) => response.json));
   }

   addArticle(newArticle){
     let headers = new HttpHeaders();
     headers.append('Content-Type', 'application/json');
     return this.http.post('http://localhost:3000/api/article', newArticle, { headers: new HttpHeaders });
   }

}
