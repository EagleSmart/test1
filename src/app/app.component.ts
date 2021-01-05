import { Component } from '@angular/core';
import { DataService } from './data.service';
// import { Article } from './article';
import * as MainJ from '../assets/js/main.js';
import * as BrowserMin from '../assets/js/browser.min.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crnogorski-angular';
  // articleList: Article[]=[];
  constructor(private dataService: DataService) { }
  
  getArticles(){
   // this.dataService.getArticles()
   // .subscribe((articles:any[])=> {
    //  this.articleList = articles;
      // console.log(this.articleList);
   // });
  }

  
}


