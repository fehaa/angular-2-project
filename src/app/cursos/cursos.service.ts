import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  constructor() { }

  public getCursos() {
    return ['Java', 'Ext JS', 'Angular'];
  }

}
