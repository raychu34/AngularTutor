import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jiuzhangAngular';
  isSubmitted = false;
  allVeggies = ['string bean', 'garlic', 'broccoli'];
  allProteins = ['chicken', 'beef', 'shrimp'];
  veggie: string;
  protein: string;
  dishOrdered = 'test ' + this.veggie;

  orderDish() {
    this.isSubmitted = true;
    if(this.veggie == undefined)
    {
      this.dishOrdered = 'Please select a veggie';
    }
    else if(this.protein == undefined)
    {
      this.dishOrdered = 'Please select a protein';
    }
    else {
      this.dishOrdered = this.veggie + ' ' + this.protein;
    }

  }
  clearOrder() {
    this.isSubmitted = false;
    this.dishOrdered = '';
  }
}
