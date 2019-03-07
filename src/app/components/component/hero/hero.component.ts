import { Component, OnInit } from '@angular/core';
import { UtilServicesService } from "../../../../services/util-services.service";

@Component({
  selector: 'app-loop-back',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  
  value1= '';
     passtitle(value: string) 
     { this.value1 = value; 
  }
   
  constructor(public heroService:UtilServicesService) { }

  ngOnInit() {
  }

  output(){
    console.log(this.value1);
  }

  addHero(value){
    console.log(value);
    this.heroService.addHero(value);
  }

}
