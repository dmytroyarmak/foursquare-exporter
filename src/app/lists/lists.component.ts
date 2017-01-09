import { Component, OnInit } from '@angular/core';
import { FoursquareApiService } from '../foursquare-api.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  lists;

  constructor(public foursquareApiService:FoursquareApiService) { }

  ngOnInit() {
    this.foursquareApiService
      .getLists()
      .subscribe((lists) => {
        this.lists = lists;
      });
  }

}
