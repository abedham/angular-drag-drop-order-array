import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers-grid',
  templateUrl: './numbers-grid.component.html',
  styleUrls: ['./numbers-grid.component.css']
})
export class NumbersGridComponent implements OnInit {

  N: number;
  items: Array<number>;
  success: boolean = false;

  constructor() {
    this.N = 5;
    this.generateArray(this.N)
  }

  generateArray(length: number) {
    this.N = length;
    let array = Array.apply(null, { length: length ** 2 }).map(Number.call, Number);
    this.items = this.shuffle(array);
  }
  ngOnInit() {
  }

  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  replaceItems(event) {
    console.log('welcome')
    let fromIndex = event[0];
    let toIndex = event[1];
    let temp = this.items[fromIndex];
    this.items[fromIndex] = this.items[toIndex];
    this.items[toIndex] = temp;
    this.checkSuccess();
  }
  checkSuccess() {
    this.success = this.isItemsOrdered();
  }
  isItemsOrdered() {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i] != i) return false;
    }
    return true;
  }
}
