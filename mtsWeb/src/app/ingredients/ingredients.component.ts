import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';


import { Ingredient }                from './ingredient';
import { IngredientsService }         from './ingredients.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {
  ingredients: Ingredient[];
  selectedIngredient: Ingredient;

  constructor(
    private ingredientsService: IngredientsService,
    private router: Router) { }

  getIngredients(): void {
    this.ingredientsService
        .getIngredients()
        .then(ingredients => this.ingredients = ingredients);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.ingredientsService.create(name)
      .then(ingredient => {
        this.ingredients.push(ingredient);
        this.selectedIngredient = null;
      });
  }

  delete(ingredient: Ingredient): void {
    this.ingredientsService
        .delete(ingredient.id)
        .then(() => {
          this.ingredients = this.ingredients.filter(h => h !== ingredient);
          if (this.selectedIngredient === ingredient) { this.selectedIngredient = null; }
        });
  }

  ngOnInit(): void {
    this.getIngredients();
  }

  onSelect(ingredient: Ingredient): void {
    this.selectedIngredient = ingredient;
  }

  gotoDetail(): void {
    this.router.navigate(['/ingredient', this.selectedIngredient.id]);
  }
}
