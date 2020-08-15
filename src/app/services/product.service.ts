import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private SERVER_URL = environment.SERVER_URL;


  products = [
    {
      id: 1,
      category: 'Categoria',
      name: 'Product Name',
      price: 350,
      oldPrice: 599,
      sale: 30,
      src: '../../../assets/electro/img/product01.png'
    },
    {
      id: 2,
      category: 'Categoria',
      name: 'Product Name',
      price: 350,
      oldPrice: 599,
      sale: 30,
      src: '../../../assets/electro/img/product02.png'
    },
    {
      id:3,
      category: 'Categoria',
      name: 'Product Name',
      price: 350,
      oldPrice: 599,
      sale: 30,
      src: '../../../assets/electro/img/product03.png'
    },
    {
      id:4,
      category: 'Categoria',
      name: 'Product Name',
      price: 350,
      oldPrice: 599,
      sale: 30,
      src: '../../../assets/electro/img/product04.png'
    },
    {
      id:5,
      category: 'Categoria',
      name: 'Product Name',
      price: 350,
      oldPrice: 599,
      sale: 30,
      src: '../../../assets/electro/img/product05.png'
    }
  ]
  constructor(private http: HttpClient) { }

  getAllProducts(numberOfResults: number = 10) {
    // return this.http.get(this.SERVER_URL+'/products',{
    //   params:{
    //     limit: numberOfResults.toString()
    //   }
    // });
    return this.products;
  }
}