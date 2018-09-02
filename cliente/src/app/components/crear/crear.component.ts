import { RackService } from './../../rack.service';
import { Rack } from './../shared/models/rack';
import { Component } from '@angular/core';
import { Location } from '@angular/common';



@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styles: []
})
export class CrearComponent {
  rack = new Rack();
  enviado = false;
  mensaje: string;

  constructor(
    private rackService: RackService,
    private location: Location
  ) {}

nouRack(): void {
  this.enviado = false;
  this.rack = new Rack;
}

addRack() {
  this.enviado = true;
  this.save();
}

  goBack(): void {
    this.location.back();
  }

  private save(): void {
    this.rackService.crearRack(this.rack)
      .subscribe();
  }
}
