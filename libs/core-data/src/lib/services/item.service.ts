import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '@jl/core-data';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  apiRoute='items';
  constructor(private http: HttpClient) { }

  allItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.getApiUrl());
  }

  private getApiUrl() {
    return `${environment.apiEndPoint}${this.apiRoute}`;
  }
}
