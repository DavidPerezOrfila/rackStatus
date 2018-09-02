import { ActivatedRoute, Params } from '@angular/router';
import { RackService } from './../../rack.service';
import { Rack } from './../shared/models/rack';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';



@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styles: []
})
export class CrearComponent implements OnInit {
  rack = new Rack();
  enviado = false;
  mensaje: string;

  constructor(
    private rackService: RackService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.rackService.getRack(id).subscribe(rack => {
      this.rack = rack;
    });
  }

  goBack(): void {
    this.location.back();
  }
}
