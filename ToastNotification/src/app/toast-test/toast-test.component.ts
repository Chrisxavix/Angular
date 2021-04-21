import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-toast-test',
  templateUrl: './toast-test.component.html',
  styleUrls: ['./toast-test.component.scss']
})
export class ToastTestComponent implements OnInit {

  constructor(
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
  }

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

  showInfo() {
    this.toastr.info('Hello world!', 'Toastr fun!');
  }

  showError() {
    this.toastr.error('Hello world!', 'Toastr fun!');
  }

}
