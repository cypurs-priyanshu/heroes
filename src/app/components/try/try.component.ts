import { Component, OnInit } from '@angular/core';
import { IdeaserviceService } from "../../../services/ideaservice.service";
import { NgForOf } from '@angular/common';
import { DebugRenderer2 } from '@angular/core/src/view/services';

@Component({
  selector: 'app-try',
  templateUrl: './try.component.html',
  styleUrls: ['./try.component.css']
})
export class trycomponent implements OnInit {
  value1 = '';
  public option1 = '2';
  isVisible: Boolean = false;
  validValues = [];
  passtitle(value: string) {
    debugger;
    this.value1 = value;
  }

  ngOnInit() {
  }


  box() {
    let temp = parseInt(this.option1);
    console.log("temp value", temp);

    if (!isNaN(temp)) {
      if (temp <= 5 && temp > 0) {
        console.log(this.option1);
        this.isVisible = true
        this.validValues = null;
        this.validValues = new Array(temp);
        for (var c = 0; c < temp; c++) {
          this.validValues[c] = "";
        }
        console.log(this.validValues);
      }
      else {
        console.log("value out of range");
        this.isVisible = false;
      }
    }
    else {
      console.log("Enter a proper int value")
      this.option1 = "0";
      this.isVisible = false;
    }
  }
  createAnswer() {
    console.log(this.validValues);

  }

  setValue(event, index) {
    console.log(event.target.value, index);
    this.validValues[index] = event.target.value;
    console.log(this.validValues);
  }
}
