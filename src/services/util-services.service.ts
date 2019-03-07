import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilServicesService {

  constructor() { }
  // private heroList:Array<String> = new Array<String>();
  private heroList = [];
  addHero(value){
    this.heroList.push(value);
    console.log("Hero List",this.heroList);
  }

  getHeroList(){
    return this.heroList.slice();
  }
}
