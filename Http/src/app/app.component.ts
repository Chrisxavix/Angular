import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from './peticiones/services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  listado: any[];
  oneItem: any[];
  formulario: FormGroup;
  constructor( 
    private UsersService: UsersService,
  ) {
    this.listado = [];
    this.oneItem = [];
    this.formulario = new FormGroup({
      title: new FormControl("", [Validators.required]),
      body: new FormControl("", [Validators.required]),
      userId: new FormControl("", [Validators.required]),
    })
  }

  ngOnInit() {
    /* Si se requiere inicializar apenas se inicie la página */
    /* this.loadListEngicoders(); */
    /* this.loadListInitial(); */
  }

  loadListInitial() {
    this.UsersService.getAll().then(response => {
      this.listado = response;
    }).catch(error => {
      console.log(error);
    })
  }

  loadListOcultar() {
    this.listado = [];
  }

  /* Usado en EngiCoders */
  loadListEngicoders() {
    this.UsersService.getAllEngicoders().subscribe((responde: any) => {
      this.listado = responde;
    })
  }

  loadById(gId) {
    this.UsersService.getById(gId).then(response => {
      this.oneItem = response;
    }).catch(error => {
      console.log(error);
    })
  }

  limpiar() {
    if (this.oneItem.length >=0) {
      alert('Está limpio.')
    } else {
      this.oneItem = [];
    }
  }

  enviarDatosPost() {
    const response = this.formulario.value;
    const title = response.title;
    const body = response.body;
    const userId = response.userId;
    this.UsersService.create(title, body, userId).then(response => {
      console.log(response, 'then');
      this.formulario.reset();
    }).catch(error => {
      console.log(error);
    })
  }

  actualizar() {
    const id = 2;
    const title = 'response.title';
    const body = 'response.body';
    const userId = 4;
    /* Va en orden los parámetros con el servicio */
    this.UsersService.update(id, title, body, userId).then(response => {
      console.log(response, 'then');
    }).catch(error => {
      console.log(error);
    })
  }

  eliminar() {
    const id = 7;
    this.UsersService.delete(id).then(response => {
      console.log(response, 'then');
    }).catch(error => {
      console.log(error);
    })
  }
}
