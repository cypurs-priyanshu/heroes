import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'cool-tag',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})

export class SimpleFormComponent implements OnInit {
  @Input() attCars = [];

  // Title variable declared
  title = 'My Angular App';
  cars = []
  
  // Defined cars array  
  // cars = ['Tesla', 'Toyota', 'BMW', 'Honda', 'Ford', 'Hyundai', 'Nissan', 'Porsche'];
  
  ngOnInit(){
    this.cars = this.attCars;
  }
  

update(title){
  //console.log(title);
  //this.title = title;
  this.cars.push(title);
  console.log(this.cars);
}

}
