import { RackService } from './../../rack.service';
import { Rack } from './../shared/models/rack';
import { Component } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styles: []
})
export class EditarComponent {
  constructor(private rackService: RackService, private location: Location) {}

  goBack(): void {
    this.location.back();
  }
}
