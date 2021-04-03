import { Component, OnInit } from '@angular/core';
import { PaisServiceService } from '../services/pais-service.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.scss']
})
export class PaisesComponent implements OnInit {

  datos: any[];
  constructor(
    private PaisServiceService: PaisServiceService,
  ) { 
    this.datos = [];
  }

  ngOnInit() {
    this.getAllData();
  }

  getAllData() {
    this.PaisServiceService.getAll().then(response => {
      this.datos = response;
      console.log(this.datos);
    }).catch(error => {
      console.log(error);
    })
  }
}
