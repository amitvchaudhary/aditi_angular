import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewserviceService {

  constructor() { }

  addstring(a : string,b:string)
  {
    return a.concat(b);
  }
}
