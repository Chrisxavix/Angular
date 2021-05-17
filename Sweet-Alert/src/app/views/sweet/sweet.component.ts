import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sweet',
  templateUrl: './sweet.component.html',
  styleUrls: ['./sweet.component.scss']
})
export class SweetComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

  delete() {
    console.log('delete');
    Swal.fire({
      title: '¿Eliminar el registro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'rgb(194, 61, 61)',
      confirmButtonText: 'SÍ',
      cancelButtonColor: 'rgb(43, 95, 155)',
      cancelButtonText: 'NO',
    }).then(response => {
      console.log(response);
      if (response.isConfirmed === true) {
        Swal.fire({
          icon: 'success',
          text: 'Registro eliminado',
          showConfirmButton: false,
          timer: 1500
        });
      } else {
        console.log('Cancelado...');
      }
    }).catch(error => {
      console.log(error, 'error');
    })
  }

  /* Swal.getTimerLeft(), Swal.stopTimer(), Swal.resumeTimer(), Swal.toggleTimer(), Swal.isTimerRunning() and Swal.increaseTimer(). */
}
