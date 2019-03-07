import { Component, OnInit } from '@angular/core';
import { UtilServicesService} from '../../../services/util-services.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {


  heroDetail = []

  constructor(public heroService:UtilServicesService) { }

  ngOnInit() {
  }

  refresh(){
 this.heroDetail = this.heroService.getHeroList();
 console.log("Hero Detail List", this.heroDetail);
  }
}
