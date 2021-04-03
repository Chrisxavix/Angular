import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Libro } from '../models/libro';
import { LibroService } from '../services/libro.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.scss']
})
export class LibrosComponent implements OnInit {

  mostrar: boolean
  libros: Libro[];
  getIdEscritor: number;
  constructor(
    private LibroService: LibroService,
    private ActivatedRoute: ActivatedRoute,
  ) {
    this.mostrar = false;
  }

  ngOnInit() {
    this.ActivatedRoute.parent.params.subscribe(async params => {
      this.getIdEscritor = parseInt(params.escrtorId);
    })
    this.getByIdEscritores();
  }

  async getByIdEscritores() {
    try {
      this.libros = await this.LibroService.getByEscritor(this.getIdEscritor);
    } catch (error) {
      console.log(error);
    }
  }

}
