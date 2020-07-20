import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  url = 'https://jsonplaceholder.typicode.com/posts' //Api Rest

  //Injetando o HttpClient  
  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  
  }

  //Obtem todos os carros
  getItens(): Observable<Item[]> {
    
    return this.httpClient.get<Item[]>(this.url)
  
  }
 
  getItemById(id: number): Observable<Item> {
    
    return this.httpClient.get<Item>(`${this.url}`)
  
  }


}