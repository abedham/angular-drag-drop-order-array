import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-generate-form',
  templateUrl: './generate-form.component.html',
  styleUrls: ['./generate-form.component.css']
})
export class GenerateFormComponent implements OnInit {

  @Output() sendDimention = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }
  generateArray(dimention: number) {
    this.sendDimention.emit(dimention);
    console.log(dimention,'hello')
  }
}
