import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any[] = [];
  constructor(private productSvc: ProductService,private router:Router) { }

  ngOnInit(): void {
    // this.productSvc.getAllProducts().subscribe((prods:{products:any[]}) =>{
    //   this.products = prods.products;
    // })
    this.products= this.productSvc.getAllProducts();
    console.log(this.productSvc.getAllProducts());
    console.log(this.products);
  }

  selectProduct(id:number){
    this.router.navigate(['/product',id]).then();
  }

}
