import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nome: new FormControl(null),
      email: new FormControl(null)
    });
  }

}
