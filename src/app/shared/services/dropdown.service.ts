import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { EstadoBr } from './../models/estado-br.model';
@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(private http: HttpClient) { }

  getEstadosBr() {
    //return this.http.get('assets/dados/estadosbr.json').pipe();
    return this.http.get<EstadoBr[]>('assets/dados/estadosbr.json');
  }

  getCargos() {
    return [
      { nome: 'Dev', nivel: 'Junior', desc: 'Dev Jr' },
      { nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pleno' },
      { nome: 'Dev', nivel: 'Senior', desc: 'Dev Senior' }
    ]
  }
}
