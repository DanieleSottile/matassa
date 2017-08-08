import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { Consumable }        from './consumable';
import { ConsumablesService } from './consumables.service';

@Component({
  selector: 'consumable-detail',
  templateUrl: './consumable-detail.component.html',
  styleUrls: [ './consumable-detail.component.css' ]
})
export class ConsumableDetailComponent implements OnInit {
  consumable: Consumable;

  constructor(
    private consumablesService: ConsumablesService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.consumablesService.getConsumable(+params.get('id')))
      .subscribe(consumable => this.consumable = consumable);
  }

  save(): void {
    this.consumablesService.update(this.consumable)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
