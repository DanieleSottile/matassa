import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { RecipeComponent } from './recipe/recipe.component';
import { SupplierComponent } from './supplier/supplier.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConsumablesComponent } from './consumables/consumables.component';
import { ConsumableDetailComponent }  from './consumables/consumable-detail.component';
import { ConsumablesService }  from './consumables/consumables.service';
import { ConsumablesListComponent } from './consumables/consumables-list.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    RecipeComponent,
    SupplierComponent,
    DashboardComponent,
    ConsumablesComponent,
    ConsumableDetailComponent,
    ConsumablesListComponent
  ],
  providers: [ ConsumablesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
