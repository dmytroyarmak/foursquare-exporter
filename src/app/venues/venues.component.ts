import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoursquareApiService } from '../foursquare-api.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-venues',
  templateUrl: './venues.component.html',
  styleUrls: ['./venues.component.css']
})
export class VenuesComponent implements OnInit {
  venues:[any];

  constructor(public activatedRoute:ActivatedRoute, public foursquareApiService:FoursquareApiService) { }

  ngOnInit() {
    this.activatedRoute.params
      .map(params => params['id'])
      .switchMap(id => {
        return this.foursquareApiService.getVenues(id);
      })
      .subscribe(venues => {
        this.venues = venues;
      });
  }

}
