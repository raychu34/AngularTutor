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
  allDishes = {
    'string bean':{
      'chicken': 'String Bean Chicken',
      'beef': 'Beef with String Bean',
    },
    'garlic':{
      'chicken': 'Garlic Chicken Fried Rice',
      'beef': 'Garlic Beef fried noodles',
      'shrimp': 'Garlic Shrimp'
    },
    'broccoli':{
      'chicken': 'Broccoli Chicken',
      'beef': 'Broccoli Beef',
    }
  }
  veggie: string;
  protein: string;
  dishOrdered: string;

  orderDish() {
    this.isSubmitted = true;
    if(this.veggie === undefined) {
      this.dishOrdered = 'Please select a veggie';
    } else if (this.protein === undefined) {
      this.dishOrdered = 'Please select a protein';
    } else {
      if (this.veggie in this.allDishes && this.protein in this.allDishes[this.veggie]) {
        this.dishOrdered = this.allDishes[this.veggie][this.protein];
      } else{
        this.dishOrdered = '--';
      }
    }

  }
  clearOrder() {
    this.isSubmitted = false;
    this.dishOrdered = '';
  }
}
