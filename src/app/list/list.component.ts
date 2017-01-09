import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() list;

  constructor() { }

  ngOnInit() {
  }

  getListImageUrl() {
    return `${this.list.photo.prefix}100x100${this.list.photo.suffix}`;
  }

}
