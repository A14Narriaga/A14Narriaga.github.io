import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HomeService {

  constructor() { }

  sendMsg(info: any): void {
    console.log(info);
  }

}
