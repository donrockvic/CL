import { Component } from '@angular/core';
import { Item } from './item.model';
import { ITEMS } from './item_list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'y';
  items =  ITEMS;

  selectedItem: Item;
  onSelect(item: Item): void {
    this.selectedItem = item;
  }
  
}
