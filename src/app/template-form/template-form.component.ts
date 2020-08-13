import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: 'Junior',
    email: 'junior@email.com'
  }

  onSubmit(form): void {
    console.log(form);
  }

  constructor() { }

  ngOnInit(): void {
  }



}
