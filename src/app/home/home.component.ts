import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service'
import { Item } from '../models/item'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  item = {} as Item;
  itens: Item[];

  constructor(private itemService: ItemService) { }

  ngOnInit() {

    this.getItens();

  }

  // Chama o serviço para obter todos os itens
  getItens() {

    this.itemService.getItens().subscribe((itens: Item[]) => {

      this.itens = itens;

    });
  }
}
