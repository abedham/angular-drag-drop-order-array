import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-number',
  templateUrl: './item-number.component.html',
  styleUrls: ['./item-number.component.css']
})
export class ItemNumberComponent implements OnInit {

  @Input() item: number
  @Input() index: number
  @Input() weight: number
  @Output() dragEvent = new EventEmitter<Array<number>>()
  constructor() {
    console.log(this.weight)
  }

  onDrop(ev) {
    console.log('drop success');
    let fromIndex = Number(ev.dataTransfer.getData("text"));
    this.dragEvent.emit([fromIndex, this.index]);
  }
  onDragStart(ev) {
    console.log('welcome' + this.index);
    ev.dataTransfer.setData('text/plain', this.index + '');
  }
  allowDrop(ev) {
    ev.preventDefault();
  }

  ngOnInit() {
  }

}
