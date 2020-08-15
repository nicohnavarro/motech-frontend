import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private SERVER_URL = environment.SERVER_URL;
  

  products = [
    {category:'Categoria',
    name:'Product Name',
    price: 350,
    oldPrice: 599,
    sale: 30,
    src: '../../../assets/electro/img/product01.png'
    },
    {
      category:'Categoria',
    name:'Product Name',
    price: 350,
    oldPrice: 599,
    sale: 30,
    src: '../../../assets/electro/img/product02.png'
    },
    {
      category:'Categoria',
    name:'Product Name',
    price: 350,
    oldPrice: 599,
    sale: 30,
    src: '../../../assets/electro/img/product03.png'
    },
    {
      category:'Categoria',
    name:'Product Name',
    price: 350,
    oldPrice: 599,
    sale: 30,
    src: '../../../assets/electro/img/product04.png'
    },
    {
      category:'Categoria',
    name:'Product Name',
    price: 350,
    oldPrice: 599,
    sale: 30,
    src: '../../../assets/electro/img/product05.png'
    }
  ]
  constructor(private http: HttpClient) { }

  getAllProducts(numberOfResults:number =10){
    // return this.http.get(this.SERVER_URL+'/products',{
    //   params:{
    //     limit: numberOfResults.toString()
    //   }
    // });
    return this.products;
  }
}