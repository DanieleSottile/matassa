import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { Ingredient }        from './ingredient';
import { IngredientsService } from './ingredients.service';

@Component({
  selector: 'ingredient-detail',
  templateUrl: './ingredient-detail.component.html',
  styleUrls: [ './ingredient-detail.component.css' ]
})
export class IngredientDetailComponent implements OnInit {
  ingredient: Ingredient;

  constructor(
    private ingredientsService: IngredientsService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.ingredientsService.getIngredient(+params.get('id')))
      .subscribe(ingredient => this.ingredient = ingredient);
  }

  save(): void {
    this.ingredientsService.update(this.ingredient)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
