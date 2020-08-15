import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any[] = [];
  constructor(private productSvc: ProductService) { }

  ngOnInit(): void {
    // this.productSvc.getAllProducts().subscribe((prods:{products:any[]}) =>{
    //   this.products = prods.products;
    // })
    this.products= this.productSvc.getAllProducts();
    console.log(this.productSvc.getAllProducts());
    console.log(this.products);
  }

}
