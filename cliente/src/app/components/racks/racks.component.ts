import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { RackService } from '../../rack.service';
import { Rack } from '../shared/models/rack';

@Component({
  selector: 'app-racks',
  templateUrl: './racks.component.html',
  styles: []
})
export class RacksComponent implements OnInit {
  racks: Rack[] = [];

  constructor(private rackService: RackService) {}
  ngOnInit(): void {
    this.getListado();
  }

  getListado() {
    this.rackService.getListado().subscribe((data) => {
      const dataArray = Object.keys(data).map(i => data[i]);
      this.racks = dataArray[0];
      console.log(this.racks);
    });
  }
}


