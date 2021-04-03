import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.scss']
})
export class EmpleadoComponent implements OnInit {

  empleId: number;
  constructor(private ActivatedRoute: ActivatedRoute) {
    this.empleId = undefined;
  }

  ngOnInit() {
    this.ActivatedRoute.params.subscribe(params => {
      this.empleId = params.empleadoId;
    })
  }

}
