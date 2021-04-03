import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {

  proyecto: number;
  constructor(private ActivatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.ActivatedRoute.parent.params.subscribe(params => {
      this.proyecto = params.empleadoId;
    })
  }
}
