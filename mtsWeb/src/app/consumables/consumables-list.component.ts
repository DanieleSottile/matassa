import {Component, ViewChild, OnInit} from '@angular/core';

import { Consumable }                 from './consumable';
import { ConsumablesService }         from './consumables.service';

@Component({
selector: 'mts-consumables-list',
templateUrl: './consumables-list.component.html',
styleUrls: ['./consumables-list.component.css']
})
export class ConsumablesListComponent implements OnInit {
  consumables: Consumable[];
  selectedConsumable: Consumable;

  constructor( private consumablesService: ConsumablesService ) { }

  ngOnInit(): void {
    this.getConsumables();
  }

  getConsumables(): void {
    this.consumablesService
        .getConsumables()
        .then(consumables => this.consumables = consumables);
  }

  delete(consumable: Consumable): void {
    this.consumablesService
        .delete(consumable.id)
        .then(() => {
          this.consumables = this.consumables.filter(h => h !== consumable);
          if (this.selectedConsumable === consumable) { this.selectedConsumable = null; }
        });
  }
}
