import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  private _albumUrl = '../assts/album.json';

  constructor(private _http: HttpClient, _productService: ProductService) { }

  getAlbum(id: number){
   return this._http.get(this._albumUrl)
   //.map((response) => response.json());
  }

}
