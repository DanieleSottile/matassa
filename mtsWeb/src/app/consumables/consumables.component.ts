import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';


import { Consumable }                from './consumable';
import { ConsumablesService }         from './consumables.service';

@Component({
  selector: 'app-consumables',
  templateUrl: './consumables.component.html',
  styleUrls: ['./consumables.component.css']
})
export class ConsumablesComponent implements OnInit {
  consumables: Consumable[];
  selectedConsumable: Consumable;

  constructor(
    private consumablesService: ConsumablesService,
    private router: Router) { }


  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.consumablesService.create(name)
      .then(consumable => {
        this.consumables.push(consumable);
        this.selectedConsumable = null;
      });
  }



  ngOnInit(): void {}

  onSelect(consumable: Consumable): void {
    this.selectedConsumable = consumable;
  }

}
