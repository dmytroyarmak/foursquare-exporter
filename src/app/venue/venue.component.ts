import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-venue',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.css']
})
export class VenueComponent implements OnInit {
  @Input() venue;

  constructor() { }

  ngOnInit() {
  }

  getVenueRatingColor() {
    return '#' + this.venue.venue.ratingColor;
  }

  getVenueImageUrl() {
    return `${this.venue.photo.prefix}100x100${this.venue.photo.suffix}`;
  }

}
