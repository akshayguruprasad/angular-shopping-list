import { ProductServiceService } from './../utility/services/product-service.service';
import { IProduct } from './IProduct';
import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnChanges {
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageHeight: number = 50;
  isShowImage: boolean = true;
  filter: string;
  set Filter(filterData: string) {
    console.log('setter filter is called');
    this.filter = filterData;
    this.filteredProducts = this.performFilter(this.filterFunction);
  }
  get Filter(): string {
    console.log('getter filter is called');
    return this.filter;

  }
  filteredProducts: IProduct[];
  products: IProduct[];

  get Product(): IProduct[] {
    return this.products;

  }
  set Product(products: IProduct[]) {
    this.products = products;
  }

  constructor(private productService: ProductServiceService) {

  }

  ngOnInit(): void {
    console.log('on init is called from the angular core ');
    this.productService.getProducts().subscribe
      (
        p => {
          this.products = p
          this.filteredProducts = this.products;
        }
      );
  }

  toggleImage(): void {
    this.isShowImage = !this.isShowImage;
  }


  ngOnChanges(): void {
    console.log('ngonchange is the calle due to change in the data model used>>>>>>>>>>>>>>>>>>>>>>>');

  }
  filterFunction = (filterData: IProduct) => {
    let data = filterData.name.toLocaleLowerCase().indexOf(this.filter.toLocaleLowerCase());
    return data != -1;

  };

  performFilter(arrowFunction): IProduct[] {
    return this.products.filter(arrowFunction);
  }
  productToDisplay: IProduct;
  pro: string;
  setProduct(message: string): void {
    this.pro = message;


  }

}
