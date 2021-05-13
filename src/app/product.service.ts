import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { } from 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  constructor(private _http: Http, _productService: ProductService) { }

  private _albumUrl = '../assts/album.json';

  getAlbum(id: number){
   return this._http.get(this._albumUrl).map(reponse.json);
  }

}
