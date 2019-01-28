import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { IProduct } from 'src/app/product-list/IProduct';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit, OnChanges {

  @Input() product: IProduct;
  width: number;
  @Output() output: EventEmitter<IProduct> = new EventEmitter<IProduct>();
  /*
  set Product(product: IProduct) {
    this.product = product;
  }
  get Product() {
    return this.product;
  }
 */
  constructor() { }
  ngOnInit() {}
  ngOnChanges(changes: SimpleChanges): void {
    this.width = parseFloat(this.product.rating) * 75 / 5;
  }
  onClick(product: IProduct): void {
    this.output.emit(this.product)
  }
}
