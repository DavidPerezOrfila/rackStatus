import { RackService } from './../../rack.service';
import { Rack } from './../shared/models/rack';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styles: []
})
export class EditarComponent implements OnInit {
  rack = new Rack();
  enviado = false;
  mensaje: string;
  envFoto = false;
  urls = new Array<string>();
  selectedFile: File = null;

  constructor(
    private rackService: RackService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get(`id`);
    this.rackService.getRack(id).subscribe(data => (this.rack = data));
  }

  update(): void {
    this.enviado = true;
    console.log(this.rack);
    this.rackService
      .actualizaRack(this.rack, this.selectedFile, this.rack.id)
      .subscribe(() => (this.mensaje = 'Host actualizado correctamente'));
  }

  delete(): void {
    this.enviado = true;
    this.rackService
      .borraRack(this.rack.id)
      .subscribe(() => (this.mensaje = 'Host borrado correctamente'));
  }

  onFileSelected(event) {
    this.urls = [];
    const files = event.target.files;
    this.selectedFile = <File>event.target.files[0];
    if (files) {
      for (const file of files) {
        // tslint:disable-next-line:prefer-const
        let reader = new FileReader();
        reader.onload = (e: any) => {
          this.urls.push(e.target.result);
        };
        reader.readAsDataURL(file);
      }
    }
  }

  goBack(): void {
    this.location.back();
  }
}
