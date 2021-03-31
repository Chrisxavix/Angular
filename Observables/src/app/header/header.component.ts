import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../services/persona.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  longitud: number;
  constructor(
    private PersonaService: PersonaService,
  ) { }

  ngOnInit() {
    this.longitud = 0;
    this.getLegthPersons();
  }

  getLegthPersons() {
    this.PersonaService.getPerson().subscribe(response => {
      this.longitud = response.length;
    })
  }
}
