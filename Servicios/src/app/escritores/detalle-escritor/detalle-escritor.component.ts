import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Escritor } from '../models/escritor';
import { EscritoresService } from '../services/escritores.service';

@Component({
  selector: 'app-detalle-escritor',
  templateUrl: './detalle-escritor.component.html',
  styleUrls: ['./detalle-escritor.component.scss']
})
export class DetalleEscritorComponent implements OnInit {

  escritor: Escritor;
  parametroPasar: number;
  constructor( 
    private EscritoresService: EscritoresService,
    private ActivatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.ActivatedRoute.params.subscribe( parametros => {
      this.parametroPasar = parseInt(parametros.escrtorId);
    });
    this.getByIdEscritores();
  }

  async getByIdEscritores() {
    try {
      this.escritor = await this.EscritoresService.getEscritorById(this.parametroPasar);
    } catch (error) {
      console.log(error);
    }
  }

  verLibros() {
    this.router.navigate(['/escritores', this.escritor.id, 'libros'])    
  }

}
