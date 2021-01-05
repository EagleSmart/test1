import { Component, OnInit } from '@angular/core';
import { fromEventPattern } from 'rxjs';
import { Article } from '../article'
import { DataService } from './../data.service';
@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  articleList: Article[]=[];
  constructor(private dataService: DataService) { }

  getArticles(){

  }

  ngOnInit() {
  }

}
