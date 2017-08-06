import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { IngredientDetailComponent }  from './ingredients/ingredient-detail.component';
import { IngredientsService }  from './ingredients/ingredients.service';
import { RecipeComponent } from './recipe/recipe.component';
import { SupplierComponent } from './supplier/supplier.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    IngredientsComponent,
    IngredientDetailComponent,
    RecipeComponent,
    SupplierComponent,
    DashboardComponent
  ],
  providers: [ IngredientsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
