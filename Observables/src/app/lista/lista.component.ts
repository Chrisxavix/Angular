import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../services/persona.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  constructor(private PersonaService: PersonaService) { }

  ngOnInit() {
    this.getLista();
  }

  getLista() {
    this.PersonaService.getPerson().subscribe(response => {
      console.log(response, 'response');
    })
  }
}
